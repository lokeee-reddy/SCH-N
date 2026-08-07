import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def remove_white_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    # threshold for considering something white
    threshold = 200
    for item in datas:
        # item is (R, G, B, A)
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            # Change all white (also shades of whites)
            # pixels to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

if __name__ == "__main__":
    remove_white_bg("logo.jpg", "logo_transparent.png")
