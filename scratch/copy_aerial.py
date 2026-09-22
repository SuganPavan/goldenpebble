import shutil
import os

src = r"C:\Users\sugan\.gemini\antigravity\brain\583917f0-4a0d-408f-b379-df5ff479ecae\.user_uploaded\media_1790069324755.png"
dst_dir = r"D:\Golden_Websites_Andaman\golden-pebble\public\images"
os.makedirs(dst_dir, exist_ok=True)
dst = os.path.join(dst_dir, "havelock-aerial-map.jpg")

shutil.copy(src, dst)
print(f"Copied uploaded aerial island image to {dst}")
