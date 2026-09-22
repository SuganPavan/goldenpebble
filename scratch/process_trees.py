from PIL import Image
import os

img_path = r"C:\Users\sugan\.gemini\antigravity\brain\583917f0-4a0d-408f-b379-df5ff479ecae\andaman_trees_photo_1790001795388.jpg"
out_dir = r"D:\Golden_Websites_Andaman\golden-pebble\public\images\decor"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(img_path).convert("RGBA")
# Remove checkerboard background pattern (light grey/white squares) if present
datas = img.getdata()
new_data = []

for item in datas:
    # Check if pixel is close to grey/white checkerboard
    r, g, b, a = item
    if (r > 190 and g > 190 and b > 190 and abs(r-g) < 15 and abs(g-b) < 15):
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append((r, g, b, a))

img.putdata(new_data)
target_path = os.path.join(out_dir, "andaman-trees-photo.png")
img.save(target_path, "PNG")
print(f"Saved processed transparent tree photo to {target_path}")
