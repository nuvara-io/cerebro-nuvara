#!/usr/bin/env python3
"""Trae una foto del banco oficial de núvara y la deja lista para Remotion.

Uso:
  uv run --no-project --with pillow python -I scripts/foto.py 172          # → public/posts/banco-172.jpg
  uv run --no-project --with pillow python -I scripts/foto.py 172 170 150  # varias
  python3 scripts/foto.py 172 --alto 1920                                    # sin uv: copia sin reducir

Busca primero el banco descargado en `Imagenes nuvara/` y, si no está, baja la
foto de Drive con el ID de docs/banco-fotos.json (la carpeta es pública por link).
Los originales bajados quedan en ~/.cache/cerebro-nuvara/fotos para no repetir la descarga.
Con Pillow corrige la orientación EXIF y reduce al alto pedido (1600px alcanza para 1080×1350 o 1080×1920).
"""

import argparse
import json
import shutil
import sys
import urllib.request
from pathlib import Path

REPO = Path(__file__).resolve().parents[1]
INDICE = REPO / "docs" / "banco-fotos.json"
BANCO_LOCAL = REPO / "Imagenes nuvara"
CACHE = Path.home() / ".cache" / "cerebro-nuvara" / "fotos"
DESTINO = REPO / "public" / "posts"


def original(numero: str, fotos: dict[str, str]) -> Path:
    nombre = f"Nuvara-{numero}.JPG"
    local = next(BANCO_LOCAL.rglob(nombre), None) if BANCO_LOCAL.exists() else None
    if local:
        return local
    if numero not in fotos:
        sys.exit(f"La foto {numero} no está en el índice de Drive (docs/banco-fotos.json).")
    CACHE.mkdir(parents=True, exist_ok=True)
    ruta = CACHE / nombre
    if not ruta.exists():
        url = f"https://drive.usercontent.google.com/download?id={fotos[numero]}&export=download&confirm=t"
        print(f"Bajando {nombre} de Drive…")
        with urllib.request.urlopen(url) as r:
            if not r.headers.get("Content-Type", "").startswith("image/"):
                sys.exit(f"Drive no devolvió una imagen para la foto {numero}: revisá que la carpeta siga compartida por link.")
            ruta.write_bytes(r.read())
    return ruta


def preparar(fuente: Path, salida: Path, alto: int) -> None:
    try:
        from PIL import Image, ImageOps
    except ImportError:
        shutil.copyfile(fuente, salida)
        print(f"  Sin Pillow: copié el original sin reducir ni corregir la orientación → {salida.relative_to(REPO)}")
        return
    with Image.open(fuente) as img:
        img = ImageOps.exif_transpose(img)
        if img.height > alto:
            img = img.resize((round(img.width * alto / img.height), alto), Image.LANCZOS)
        img.convert("RGB").save(salida, "JPEG", quality=88)
        print(f"  {salida.relative_to(REPO)} ({img.width}×{img.height})")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("numeros", nargs="+", help="número de la foto según docs/banco-fotos.md")
    p.add_argument("--alto", type=int, default=1600)
    args = p.parse_args()

    fotos = json.loads(INDICE.read_text())["fotos"]
    DESTINO.mkdir(parents=True, exist_ok=True)
    for numero in args.numeros:
        preparar(original(numero, fotos), DESTINO / f"banco-{numero}.jpg", args.alto)


if __name__ == "__main__":
    main()
