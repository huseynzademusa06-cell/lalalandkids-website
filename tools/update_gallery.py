#!/usr/bin/env python3
"""Rebuild the gallery grids from photo folders — the "easy future uploads" pipeline.

Usage:
    1. Drop photos into  assets/gallery/space/    (rooms & facility shots)
       and/or            assets/gallery/moments/  (everyday-life shots)
    2. Name files with a caption, dashes become spaces:
           infant-room.jpg        -> caption "Infant room"
           art-corner-fun.jpg     -> caption "Art corner fun"
    3. Run:  python3 tools/update_gallery.py
       (add --optimize to also resize/compress big photos in place, macOS only)

The script rewrites gallery.html between the GALLERY:SPACE and GALLERY:MOMENTS
markers. If a folder is empty, that grid keeps its current placeholder tiles.
ONLY use photos of children whose parents signed the Photo & Video Release form.
"""
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GALLERY = ROOT / "gallery.html"
EXTS = {".jpg", ".jpeg", ".png", ".webp"}
MAX_EDGE = 1600  # px, for --optimize


def tiles_for(folder: Path) -> str:
    photos = sorted(p for p in folder.iterdir() if p.suffix.lower() in EXTS)
    if not photos:
        return ""
    out = ['      <div class="gallery-grid">']
    for p in photos:
        caption = p.stem.replace("-", " ").replace("_", " ").strip().capitalize()
        rel = p.relative_to(ROOT).as_posix()
        out.append(
            f'        <figure class="tile" style="padding:0">'
            f'<img src="{rel}" alt="{caption} — Lala Land Kids" loading="lazy" '
            f'style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">'
            f"</figure>"
        )
    out.append("      </div>")
    return "\n".join(out)


def optimize(folder: Path) -> None:
    for p in folder.iterdir():
        if p.suffix.lower() in EXTS:
            subprocess.run(
                ["sips", "--resampleHeightWidthMax", str(MAX_EDGE), str(p)],
                capture_output=True,
            )


def replace_block(html: str, name: str, new_grid: str) -> str:
    if not new_grid:
        return html
    pat = re.compile(
        rf"(<!-- GALLERY:{name} START[^>]*-->\n).*?(\n      <!-- GALLERY:{name} END -->)",
        re.S,
    )
    if not pat.search(html):
        sys.exit(f"!! marker GALLERY:{name} not found in gallery.html")
    return pat.sub(rf"\g<1>{new_grid}\g<2>", html)


def main() -> None:
    if "--optimize" in sys.argv:
        for sub in ("space", "moments"):
            optimize(ROOT / "assets" / "gallery" / sub)
    html = GALLERY.read_text()
    for sub, marker in (("space", "SPACE"), ("moments", "MOMENTS")):
        folder = ROOT / "assets" / "gallery" / sub
        grid = tiles_for(folder)
        html = replace_block(html, marker, grid)
        n = len(grid.splitlines()) - 2 if grid else 0
        print(f"{marker.lower()}: {n if grid else 'no photos — placeholders kept'}")
    GALLERY.write_text(html)
    print("gallery.html updated. Next: bash ~/Documents/Claude_LalaLandKids/deploy-sync.sh, then push.")


if __name__ == "__main__":
    main()
