"""Generate the static brand assets (favicon + Open Graph image).

Run from the project root:  python3 scripts/generate-brand-images.py
Requires Pillow and numpy.

Ikony i OG obrázek jsou záměrně bez iniciál — nosí je jméno a pastelový
gradient, který sedí k designu webu.
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "src" / "app"

PAGE = (255, 255, 255)
INK = (20, 20, 25)
MUTED = (99, 99, 110)
ACCENT = (47, 98, 232)
MINT = (110, 231, 183)
VIOLET = (196, 181, 253)
SKY = (191, 219, 254)

ARIAL = "/System/Library/Fonts/Supplemental/Arial.ttf"
ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def gradient(size: int, start, end) -> Image.Image:
    """Čtvercový diagonální gradient."""
    axis = np.linspace(0.0, 1.0, size)
    t = (axis[None, :] + axis[:, None]) / 2.0
    start = np.array(start, dtype=np.float32)
    end = np.array(end, dtype=np.float32)
    arr = start[None, None, :] + (end - start)[None, None, :] * t[..., None]
    return Image.fromarray(arr.astype(np.uint8), "RGB").convert("RGBA")


def horizontal_gradient(width: int, height: int, start, end) -> Image.Image:
    axis = np.linspace(0.0, 1.0, width)[None, :, None]
    start = np.array(start, dtype=np.float32)[None, None, :]
    end = np.array(end, dtype=np.float32)[None, None, :]
    arr = start + (end - start) * axis
    arr = np.repeat(arr, height, axis=0)
    return Image.fromarray(arr.astype(np.uint8), "RGB").convert("RGBA")


def make_icon(size: int, path: Path) -> None:
    image = gradient(size, MINT, VIOLET)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [0, 0, size - 1, size - 1], radius=int(size * 0.24), fill=255
    )
    image.putalpha(mask)
    image.save(path)

    # menší varianta pro iOS
    small = image.resize((180, 180), Image.LANCZOS)
    small.save(APP / "apple-icon.png")


def make_og() -> None:
    width, height = 1200, 630
    image = Image.new("RGBA", (width, height), PAGE + (255,))

    # jemné pastelové světlo v pozadí
    glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(glow)
    for (cx, cy), radius, color, alpha in [
        ((120, 20), 380, MINT, 95),
        ((1090, 110), 360, VIOLET, 90),
        ((600, -160), 420, SKY, 55),
    ]:
        draw.ellipse(
            [cx - radius, cy - radius, cx + radius, cy + radius],
            fill=(*color, alpha),
        )
    glow = glow.filter(ImageFilter.GaussianBlur(120))
    image = Image.alpha_composite(image, glow)

    draw = ImageDraw.Draw(image)

    draw.text((80, 176), "Jakub Grygar", font=font(ARIAL_BOLD, 96), fill=INK)
    draw.text((84, 306), "Web · VR · AI", font=font(ARIAL, 36), fill=ACCENT)
    draw.text(
        (84, 366),
        "Student IT · Ostrava",
        font=font(ARIAL, 28),
        fill=MUTED,
    )
    draw.text((84, 520), "grygar.me", font=font(ARIAL, 26), fill=MUTED)

    # barevný proužek dole, stejný jako na kartách
    strip = horizontal_gradient(width, 14, MINT, VIOLET)
    image.alpha_composite(strip, (0, height - 14))

    image.convert("RGB").save(APP / "opengraph-image.png")


if __name__ == "__main__":
    make_icon(512, APP / "icon.png")
    make_og()
    print("Hotovo: icon.png, apple-icon.png, opengraph-image.png")
