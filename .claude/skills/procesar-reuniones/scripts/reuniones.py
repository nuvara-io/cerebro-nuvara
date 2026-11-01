#!/usr/bin/env python3
"""Parte mecánica de la skill procesar-reuniones (sin modelos, solo stdlib).

Subcomandos:
  inventario <carpeta>  Extrae el texto, deduplica contra el registro, arma lotes y muestras.
  agrupar               Junta los ítems de todas las fichas por archivo de destino.
  auditar               Busca datos personales y vocabulario prohibido en el cerebro.
  registrar             Agrega las reuniones del triage a conocimiento/fuentes-procesadas.md.

El texto crudo vive en ~/.cache/cerebro-nuvara/reuniones (fuera del repo), nunca en git.
"""

import argparse
import hashlib
import html
import json
import os
import re
import subprocess
import sys
import zipfile
from collections import Counter
from datetime import date
from pathlib import Path
from xml.etree import ElementTree

REPO = Path(__file__).resolve().parents[4]
REGISTRO = REPO / "conocimiento" / "fuentes-procesadas.md"
# CEREBRO_STAGING permite probar el script sin tocar el staging real
STAGING = Path(os.environ.get("CEREBRO_STAGING", Path.home() / ".cache" / "cerebro-nuvara" / "reuniones"))
EXTENSIONES = {".txt", ".md", ".vtt", ".srt", ".docx", ".pdf", ".html", ".htm"}

MESES = {
    "ene": 1, "feb": 2, "mar": 3, "abr": 4, "may": 5, "jun": 6,
    "jul": 7, "ago": 8, "sep": 9, "set": 9, "oct": 10, "nov": 11, "dic": 12,
}

# Palabras que aparecen como "Algo:" al inicio de línea y no son personas
NO_SON_NOMBRES = {
    "Resumen", "Notas", "Nota", "Acción", "Acciones", "Pasos", "Paso", "Tema", "Temas",
    "Detalles", "Participantes", "Asistentes", "Fecha", "Hora", "Transcripción", "Siguientes",
    "Próximos", "Objetivo", "Conclusión", "Conclusiones", "Pregunta", "Respuesta", "Importante",
    "Ejemplo", "Error", "Usuario", "Asesor", "Cliente", "Duración", "Título", "Asunto",
    "Cuentas", "Contabilidad", "Fuentes", "Auxiliar", "El", "La", "Los", "Las", "Se", "Durante",
    "Además", "También", "Luego", "Finalmente", "Ambos", "Todos", "Equipo", "Contador", "Contadora",
    # Encabezados de los resúmenes de Gemini que la búsqueda de "X explicó…" confunde con personas
    "Facturas", "Pasos", "Pendientes", "Cuenta", "Retenciones", "Inventario", "Empresa", "Documentos",
    "Régimen", "Simple", "Terceros", "Telegram", "Software", "Nómina", "Compras", "Compra", "Anticipos",
    "Código", "Costo", "Costos", "Alcance", "Pago", "Informes", "Datos", "Crédito", "Caja", "Allí",
    "Tarjeta", "Servicios", "Reportes", "Pruebas", "Gestión", "Garantía", "Finanzas", "Exportación",
    "Dirección", "Concepto", "Vencimientos", "Tiempos", "Tareas", "Sistema", "Referencia", "Quién",
    "Producción", "Procesos", "Proceso", "Notificaciones", "Independiente", "Horas", "Formación",
    "Etapas", "Contables", "Carpetas", "Calidad", "Bloque",
}

# Nombres propios que sí pueden estar en el cerebro (marcas, productos, bancos)
PERMITIDOS = {
    "núvara", "Núvara", "Nuvi", "Siigo", "DIAN", "World", "Office", "Google", "Gmail", "Outlook",
    "Chrome", "Alegra", "Helisa", "Contai", "Bancolombia", "Davivienda", "Gemini", "Excel",
    "WhatsApp", "Colombia", "RADIAN", "Pyme", "PyME",
}


# ---------- extracción de texto ----------

def texto_docx(ruta: Path) -> str:
    w = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
    with zipfile.ZipFile(ruta) as z:
        raiz = ElementTree.fromstring(z.read("word/document.xml"))
    parrafos = ("".join(t.text or "" for t in p.iter(f"{w}t")) for p in raiz.iter(f"{w}p"))
    return "\n".join(parrafos)


def texto_subtitulos(crudo: str) -> str:
    lineas = []
    for linea in crudo.splitlines():
        linea = linea.strip()
        if not linea or linea == "WEBVTT" or linea.isdigit() or "-->" in linea:
            continue
        # <v Nombre>texto</v> de WebVTT → "Nombre: texto"
        linea = re.sub(r"<v\s+([^>]+)>", r"\1: ", linea)
        linea = re.sub(r"</?[^>]+>", "", linea)
        if not lineas or lineas[-1] != linea:
            lineas.append(linea)
    return "\n".join(lineas)


def extraer(ruta: Path) -> str:
    ext = ruta.suffix.lower()
    if ext == ".docx":
        return texto_docx(ruta)
    if ext == ".pdf":
        r = subprocess.run(["pdftotext", "-q", str(ruta), "-"], capture_output=True, text=True)
        return r.stdout
    crudo = ruta.read_text(encoding="utf-8", errors="replace")
    if ext in {".vtt", ".srt"}:
        return texto_subtitulos(crudo)
    if ext in {".html", ".htm"}:
        crudo = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", crudo, flags=re.S | re.I)
        crudo = re.sub(r"<br\s*/?>|</p>|</div>|</li>", "\n", crudo, flags=re.I)
        return html.unescape(re.sub(r"<[^>]+>", "", crudo))
    return crudo


def normalizar(texto: str) -> str:
    lineas = []
    for linea in texto.splitlines():
        linea = linea.strip()
        # Marcas de tiempo sueltas: "00:01:23", "(1:02)"
        if re.fullmatch(r"\(?\d{1,2}:\d{2}(:\d{2})?\)?", linea):
            continue
        lineas.append(linea)
    return re.sub(r"\n{3,}", "\n\n", "\n".join(lineas)).strip()


def huella(texto: str) -> str:
    plano = re.sub(r"\s+", " ", texto).strip().lower()
    return "h-" + hashlib.sha256(plano.encode()).hexdigest()[:12]


def detectar_fecha(*fuentes: str) -> str:
    for fuente in fuentes:
        m = re.search(r"(20\d{2})[-_/.](\d{1,2})[-_/.](\d{1,2})", fuente)
        if m:
            return f"{m[1]}-{int(m[2]):02d}-{int(m[3]):02d}"
        m = re.search(r"\b(\d{1,2})[-_/.](\d{1,2})[-_/.](20\d{2})", fuente)
        if m:
            return f"{m[3]}-{int(m[2]):02d}-{int(m[1]):02d}"
        m = re.search(r"\b(\d{1,2})\s+(?:de\s+)?([a-záéíóú]{3})[a-záéíóú]*\.?\s+(?:de\s+)?(20\d{2})", fuente, re.I)
        if m and m[2].lower() in MESES:
            return f"{m[3]}-{MESES[m[2].lower()]:02d}-{int(m[1]):02d}"
    return "—"


VERBOS_RESUMEN = (
    "planteó|mencionó|explicó|indicó|señaló|preguntó|confirmó|propuso|sugirió|informó|aclaró|comentó|"
    "mostró|solicitó|expresó|detalló|presentó|describió|enfatizó|acordó|compartió|destacó|consultó"
)


def hablantes(texto: str) -> Counter:
    # "Nombre Apellido: …" en la transcripción y "Nombre Apellido explicó …" en el resumen de Gemini
    etiqueta = r"^([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){0,3})\s*:"
    resumen = rf"\b([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){{0,2}}) (?:{VERBOS_RESUMEN})\b"
    nombres = re.findall(etiqueta, texto, re.M) + re.findall(resumen, texto)
    return Counter(m for m in nombres if m.split()[0] not in NO_SON_NOMBRES)


# ---------- registro ----------

def leer_registro() -> tuple[set[str], Counter]:
    ids, fechas = set(), Counter()
    if REGISTRO.exists():
        for fila in re.findall(r"^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|", REGISTRO.read_text(), re.M):
            ids.add(fila[0])
            if re.fullmatch(r"20\d{2}-\d{2}-\d{2}", fila[1]):
                fechas[fila[1]] += 1
    return ids, fechas


# ---------- subcomandos ----------

def cmd_inventario(args: argparse.Namespace) -> None:
    origen = Path(args.carpeta).expanduser().resolve()
    textos = STAGING / "textos"
    textos.mkdir(parents=True, exist_ok=True)
    ids_registrados, fechas_registradas = leer_registro()

    items, vistos, nombres = [], set(), Counter()
    archivos = sorted(p for p in origen.rglob("*") if p.is_file() and p.suffix.lower() in EXTENSIONES)
    for ruta in archivos:
        relativa = str(ruta.relative_to(origen))
        try:
            texto = normalizar(extraer(ruta))
        except Exception as error:  # un archivo roto no frena el inventario
            items.append({"archivo": relativa, "estado": "error", "aviso": str(error)[:120]})
            continue
        palabras = len(texto.split())
        if palabras < args.min_palabras:
            items.append({"archivo": relativa, "estado": "vacía", "palabras": palabras})
            continue

        id_ = huella(texto)
        fecha = detectar_fecha(ruta.name, "\n".join(texto.splitlines()[:40]))
        item = {"id": id_, "archivo": relativa, "fecha": fecha, "palabras": palabras}
        if id_ in ids_registrados:
            item["estado"] = "ya-procesada"
        elif id_ in vistos:
            item["estado"] = "repetida"
        else:
            item["estado"] = "nueva"
            vistos.add(id_)
            if fechas_registradas[fecha]:
                item["aviso"] = f"ya hay {fechas_registradas[fecha]} reunión(es) del {fecha} en el registro: revisar si es la misma"
            (textos / f"{id_}.txt").write_text(texto)
            todas = texto.split()
            muestra = " ".join(todas[: args.muestra])
            if len(todas) > args.muestra:
                muestra += "\n\n[…]\n\n" + " ".join(todas[-300:])
            (textos / f"{id_}.muestra.txt").write_text(muestra)
            nombres.update(hablantes(texto))
        items.append(item)

    # Lotes por tamaño: cada agente de extracción recibe un lote que le entra cómodo
    lotes, actual, tam = [], [], 0
    for item in (i for i in items if i["estado"] == "nueva"):
        if actual and (tam + item["palabras"] > args.max_palabras or len(actual) >= args.max_reuniones):
            lotes.append({"lote": len(lotes) + 1, "ids": actual, "palabras": tam})
            actual, tam = [], 0
        actual.append(item["id"])
        tam += item["palabras"]
    if actual:
        lotes.append({"lote": len(lotes) + 1, "ids": actual, "palabras": tam})

    previos = STAGING / "nombres.txt"
    conocidos = set(previos.read_text().splitlines()) if previos.exists() else set()
    previos.write_text("\n".join(sorted(conocidos | {n for n, c in nombres.items() if c >= 2})))

    manifiesto = {"origen": str(origen), "generado": date.today().isoformat(), "items": items, "lotes": lotes}
    (STAGING / "manifiesto.json").write_text(json.dumps(manifiesto, ensure_ascii=False, indent=2))

    estados = Counter(i["estado"] for i in items)
    print(f"Archivos leídos: {len(items)} en {origen}")
    for estado, n in sorted(estados.items()):
        print(f"  {estado}: {n}")
    print(f"Lotes de extracción: {len(lotes)} (máx. {args.max_palabras} palabras o {args.max_reuniones} reuniones)")
    for i in items:
        if i.get("aviso"):
            print(f"  aviso {i.get('id', i['archivo'])}: {i['aviso']}")
    print(f"Staging: {STAGING}")


def cmd_agrupar(_: argparse.Namespace) -> None:
    fichas = sorted((STAGING / "fichas").glob("h-*.md"))
    destinos: dict[str, list[str]] = {}
    for ficha in fichas:
        fuente, destino = ficha.stem, None
        for linea in ficha.read_text().splitlines():
            m = re.match(r"^##\s+(\S+\.md)\s*$", linea)
            if m:
                destino = m[1]
            elif destino and linea.strip():
                destinos.setdefault(destino, []).append(f"{linea.rstrip()} [{fuente}]")
    salida = STAGING / "destinos"
    salida.mkdir(exist_ok=True)
    for viejo in salida.glob("*.md"):
        viejo.unlink()
    for destino, lineas in sorted(destinos.items()):
        nombre = destino.replace("/", "__")
        (salida / nombre).write_text(f"# Destino: conocimiento/{destino}\n\n" + "\n".join(lineas) + "\n")
        print(f"{len(lineas):4d} ítems → conocimiento/{destino}")
    print(f"{len(fichas)} fichas agrupadas en {len(destinos)} destinos: {salida}")


def cmd_auditar(args: argparse.Namespace) -> None:
    rutas = [REPO / r for r in args.rutas]
    archivos = [p for r in rutas if r.exists() for p in (r.rglob("*.md") if r.is_dir() else [r])]
    nombres_archivo = STAGING / "nombres.txt"
    tokens = set()
    if nombres_archivo.exists():
        for nombre in nombres_archivo.read_text().splitlines():
            tokens |= {t for t in nombre.split() if len(t) >= 4 and t not in PERMITIDOS | NO_SON_NOMBRES}

    errores = [
        ("correo", r"[\w.+-]+@[\w-]+\.[\w.]+"),
        ("teléfono", r"(?:\+57\s?)?\b3\d{2}[\s-]?\d{3}[\s-]?\d{4}\b"),
        ("NIT o documento", r"\b\d{3}\.?\d{3}\.?\d{3}(?:-\d)?\b"),
    ]
    avisos = [
        ("IA sola", r"\bIA\b"),
        ("automatizamos", r"\bautomatizamos\b"),
        ("demo", r"\bdemos?\b"),
        ("nuvicoins", r"\bnuvi\s?coins?\b"),
        ("usted", r"\busted(es)?\b"),
        ("revolucionario", r"\brevolucionari[oa]s?\b"),
    ]
    n_err = n_avi = 0
    for archivo in archivos:
        relativa = archivo.relative_to(REPO)
        for nro, linea in enumerate(archivo.read_text().splitlines(), 1):
            if relativa.name == "fuentes-procesadas.md":
                continue  # sus IDs parecen números largos y no tienen datos personales
            for etiqueta, patron in errores:
                for m in re.findall(patron, linea):
                    print(f"ERROR {relativa}:{nro} {etiqueta}: {m}")
                    n_err += 1
            for token in tokens:
                if re.search(rf"\b{re.escape(token)}\b", linea):
                    print(f"ERROR {relativa}:{nro} nombre de una reunión: {token}")
                    n_err += 1
            for etiqueta, patron in avisos:
                if re.search(patron, linea, re.I if etiqueta != "IA sola" else 0):
                    print(f"aviso {relativa}:{nro} {etiqueta}")
                    n_avi += 1
    print(f"{n_err} errores, {n_avi} avisos en {len(archivos)} archivos ({len(tokens)} nombres vigilados)")
    sys.exit(1 if n_err else 0)


def cmd_registrar(args: argparse.Namespace) -> None:
    triage = json.loads((STAGING / "triage.json").read_text())
    ids_registrados, _ = leer_registro()
    filas = [
        f"| {t['id']} | {t.get('fecha', '—')} | {t['tipo']} | {'sí' if t['incluida'] else 'no'} | {t['motivo']} |"
        for t in triage
        if t["id"] not in ids_registrados
    ]
    if not filas:
        print("Nada nuevo para registrar.")
        return
    incluidas = sum(1 for t in triage if t["incluida"] and t["id"] not in ids_registrados)
    bloque = (
        f"\n## Tanda {date.today().isoformat()} ({args.origen})\n\n"
        f"Resumen: {len(filas)} reuniones; {incluidas} incluidas; {len(filas) - incluidas} no incluidas. "
        "ID = huella del texto (`h-` + sha256).\n\n"
        "| ID | Fecha | Tipo | Incluida | Motivo |\n|---|---|---|---|---|\n" + "\n".join(filas) + "\n"
    )
    with REGISTRO.open("a") as f:
        f.write(bloque)
    print(f"Registradas {len(filas)} reuniones en {REGISTRO.relative_to(REPO)}")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)

    inv = sub.add_parser("inventario")
    inv.add_argument("carpeta")
    inv.add_argument("--max-palabras", type=int, default=45000)
    inv.add_argument("--max-reuniones", type=int, default=8)
    inv.add_argument("--muestra", type=int, default=1200, help="palabras iniciales para el triage")
    inv.add_argument("--min-palabras", type=int, default=150)
    inv.set_defaults(fn=cmd_inventario)

    sub.add_parser("agrupar").set_defaults(fn=cmd_agrupar)

    aud = sub.add_parser("auditar")
    aud.add_argument("rutas", nargs="*", default=["conocimiento", "CLAUDE.md"])
    aud.set_defaults(fn=cmd_auditar)

    reg = sub.add_parser("registrar")
    reg.add_argument("--origen", default="carpeta local")
    reg.set_defaults(fn=cmd_registrar)

    args = p.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
