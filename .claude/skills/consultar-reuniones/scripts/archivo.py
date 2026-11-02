#!/usr/bin/env python3
"""Archivo crudo de reuniones de núvara: el texto completo, buscable sin cargarlo en contexto.

Subcomandos:
  construir [carpeta]   Extrae el texto de las reuniones de núvara registradas y arma el índice.
  buscar "consulta"     Devuelve las reuniones y los fragmentos que coinciden.
  leer <id>             Muestra un tramo de una reunión.

Consulta: los términos separados por espacio deben aparecer todos en la reunión (Y);
dentro de un término, `|` separa sinónimos (O). Sin tildes ni mayúsculas: "anticipo|adelantado siigo".
Las comillas dobles internas agrupan frases: '"token de la dian" vence|expira'.

El archivo vive en archivo-reuniones/ (excluido de git): tiene datos reales de usuarios.
"""

import argparse
import json
import math
import re
import shlex
import sys
import unicodedata
from pathlib import Path

REPO = Path(__file__).resolve().parents[4]
ARCHIVO = REPO / "archivo-reuniones"
INDICE = ARCHIVO / "indice.json"
REGISTRO = REPO / "conocimiento" / "fuentes-procesadas.md"
CARPETA = REPO / "conocimiento" / "grabaciones de reuniones nuvara"
TRIAGE = Path.home() / ".cache" / "cerebro-nuvara" / "reuniones" / "triage.json"

sys.path.insert(0, str(REPO / ".claude" / "skills" / "procesar-reuniones" / "scripts"))
from reuniones import EXTENSIONES, detectar_fecha, extraer, huella, normalizar  # noqa: E402


def plano(texto: str) -> str:
    """Minúsculas y sin tildes, para comparar sin depender de cómo se transcribió."""
    return "".join(c for c in unicodedata.normalize("NFD", texto.lower()) if unicodedata.category(c) != "Mn")


# ---------- construir ----------

def leer_registro() -> tuple[dict[str, tuple[str, str, bool]], dict[str, str]]:
    filas, equivalencias = {}, {}
    for linea in REGISTRO.read_text().splitlines():
        celdas = [c.strip() for c in linea.strip().strip("|").split("|")]
        if len(celdas) >= 4 and celdas[3] in ("sí", "no"):
            filas[celdas[0]] = (celdas[1], celdas[2], celdas[3] == "sí")
        elif len(celdas) == 2 and celdas[0].startswith("h-"):
            equivalencias[celdas[0]] = celdas[1]
    return filas, equivalencias


def cmd_construir(args: argparse.Namespace) -> None:
    origen = Path(args.carpeta).expanduser().resolve() if args.carpeta else CARPETA
    filas, equivalencias = leer_registro()
    temas = {}
    if TRIAGE.exists():
        temas = {t["id"]: t.get("temas", "") for t in json.loads(TRIAGE.read_text())}

    ARCHIVO.mkdir(exist_ok=True)
    indice, fuera, sin_registro = {}, 0, 0
    for ruta in sorted(p for p in origen.rglob("*") if p.is_file() and p.suffix.lower() in EXTENSIONES):
        try:
            texto = normalizar(extraer(ruta))
        except Exception:
            continue
        id_ = huella(texto)
        fila = filas.get(id_) or filas.get(equivalencias.get(id_, ""))
        if not fila:
            sin_registro += 1
            continue
        fecha, tipo, incluida = fila
        if not incluida:
            fuera += 1
            continue
        (ARCHIVO / f"{id_}.txt").write_text(texto)
        if fecha == "—":
            fecha = detectar_fecha(ruta.name.replace("_", "-"), "\n".join(texto.splitlines()[:40]))
        indice[id_] = {
            "fecha": fecha,
            "tipo": tipo,
            "temas": temas.get(id_, ""),
            "palabras": len(texto.split()),
            "drive": equivalencias.get(id_, ""),
        }

    for viejo in ARCHIVO.glob("h-*.txt"):
        if viejo.stem not in indice:
            viejo.unlink()
    INDICE.write_text(json.dumps(dict(sorted(indice.items(), key=lambda kv: kv[1]["fecha"])), ensure_ascii=False, indent=1))
    palabras = sum(i["palabras"] for i in indice.values())
    print(f"Archivo: {len(indice)} reuniones de núvara, {palabras:,} palabras → {ARCHIVO.relative_to(REPO)}/")
    print(f"Fuera del archivo: {fuera} no incluidas en el registro, {sin_registro} sin registrar (procesalas primero con procesar-reuniones)")


# ---------- buscar ----------

def grupos(consulta: str) -> list[list[str]]:
    return [[plano(s) for s in termino.split("|") if s] for termino in shlex.split(consulta)]


def cargar_indice() -> dict:
    if not INDICE.exists():
        sys.exit("No hay archivo: corré primero `archivo.py construir`.")
    return json.loads(INDICE.read_text())


def cmd_buscar(args: argparse.Namespace) -> None:
    indice = cargar_indice()
    terminos = grupos(args.consulta)
    patrones = [re.compile("|".join(re.escape(s) for s in g)) for g in terminos]

    resultados = []
    for id_, meta in indice.items():
        if args.tipo and meta["tipo"] != args.tipo:
            continue
        if args.desde and meta["fecha"] < args.desde:
            continue
        lineas = (ARCHIVO / f"{id_}.txt").read_text().splitlines()
        planas = [plano(l) for l in lineas]
        conteo = [sum(len(p.findall(l)) for l in planas) for p in patrones]
        if not args.cualquiera and not all(conteo):
            continue
        if not any(conteo):
            continue
        # Las líneas que reúnen más términos distintos son los mejores fragmentos
        puntaje_linea = [(sum(1 for p in patrones if p.search(l)), n) for n, l in enumerate(planas)]
        mejores = sorted((x for x in puntaje_linea if x[0]), key=lambda x: (-x[0], x[1]))[: args.fragmentos]
        # Pesa que los términos aparezcan juntos; el log evita que una palabra muy repetida domine
        juntas = sum(1 for k, _ in puntaje_linea if k == len(patrones))
        puntaje = juntas * 10 + sum(math.log1p(c) for c in conteo)
        resultados.append((round(puntaje, 1), id_, meta, lineas, sorted(n for _, n in mejores)))

    # Más coincidencias primero; a igual cantidad, la reunión más reciente
    resultados.sort(key=lambda r: r[2]["fecha"], reverse=True)
    resultados.sort(key=lambda r: -r[0])
    print(f"{len(resultados)} reuniones coinciden con {args.consulta!r}" + (f" (tipo {args.tipo})" if args.tipo else ""))
    for total, id_, meta, lineas, nros in resultados[: args.n]:
        print(f"\n## {id_} · {meta['fecha']} · {meta['tipo']} · relevancia {total}" + (f" · {meta['temas']}" if meta["temas"] else ""))
        for n in nros:
            tramo = " ".join(l.strip() for l in lineas[max(0, n - args.contexto): n + args.contexto + 1] if l.strip())
            print(f"  L{n + 1}: {tramo[: args.largo]}{'…' if len(tramo) > args.largo else ''}")


def cmd_leer(args: argparse.Namespace) -> None:
    indice = cargar_indice()
    if args.id not in indice:
        sys.exit(f"{args.id} no está en el archivo.")
    meta = indice[args.id]
    lineas = (ARCHIVO / f"{args.id}.txt").read_text().splitlines()
    inicio = max(1, args.linea)
    print(f"# {args.id} · {meta['fecha']} · {meta['tipo']} · {len(lineas)} líneas")
    for n in range(inicio - 1, min(len(lineas), inicio - 1 + args.lineas)):
        if lineas[n].strip():
            print(f"{n + 1}: {lineas[n]}")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)

    c = sub.add_parser("construir")
    c.add_argument("carpeta", nargs="?")
    c.set_defaults(fn=cmd_construir)

    b = sub.add_parser("buscar")
    b.add_argument("consulta")
    b.add_argument("-n", type=int, default=8, help="reuniones a mostrar")
    b.add_argument("--fragmentos", type=int, default=3, help="fragmentos por reunión")
    b.add_argument("--contexto", type=int, default=1, help="líneas alrededor de cada fragmento")
    b.add_argument("--largo", type=int, default=400, help="caracteres por fragmento")
    b.add_argument("--tipo", choices=["capacitación", "soporte", "demostración", "interna"])
    b.add_argument("--desde", help="AAAA-MM o AAAA-MM-DD")
    b.add_argument("--cualquiera", action="store_true", help="basta con un término (O en vez de Y)")
    b.set_defaults(fn=cmd_buscar)

    l = sub.add_parser("leer")
    l.add_argument("id")
    l.add_argument("--linea", type=int, default=1)
    l.add_argument("--lineas", type=int, default=80)
    l.set_defaults(fn=cmd_leer)

    args = p.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
