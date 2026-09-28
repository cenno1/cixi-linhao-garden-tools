"""Extract bounded product figures from the supplied scanned PDF, without retouching.

Usage: python scripts/extract-catalog-figures.py PDF POPPLER_DIRECTORY OUTPUT_SCRATCH
Rectangles are in the 1400px-wide source review coordinate system.
"""
import json
import subprocess
import sys
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
source, poppler, scratch = map(Path, sys.argv[1:4])
scratch.mkdir(parents=True, exist_ok=True)
rows = json.loads((root / "app/data/catalog-2026.json").read_text(encoding="utf-8"))
target = root / "public/images/products/catalog-2026"
target.mkdir(parents=True, exist_ok=True)
for page in sorted({row["page"] for row in rows}):
    prefix = scratch / f"source-{page:02}"
    subprocess.run([str(poppler / "pdftoppm.exe"), "-f", str(page), "-l", str(page),
                    "-scale-to", "2800", "-singlefile", "-png", str(source), str(prefix)], check=True)
    with Image.open(str(prefix) + ".png") as spread:
        scale = spread.width / 1400
        for row in [r for r in rows if r["page"] == page]:
            x, y, width, height = row["rect"]
            # The scanned spreads place each photo between caption blocks.
            # Keep those blocks outside the extracted figure whenever possible.
            if page == 20 and x > 700:
                top_gap = 10 if y < 400 else 20 if y < 600 else 30
                lower_edge = 0.78 if y < 400 else 0.88 if y < 600 else 0.94
            else:
                top_gap, lower_edge = 35, 0.94
            box = tuple(round(v * scale) for v in (x, y + top_gap, x + width, y + height * lower_edge))
            spread.crop(box).convert("RGB").save(target / f'{row["code"].lower()}.webp', quality=90)
print(f"Extracted {len(rows)} source figures.")
