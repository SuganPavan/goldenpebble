import subprocess
import imageio_ffmpeg
import os

ff = imageio_ffmpeg.get_ffmpeg_exe()
src = r"D:\Golden_Websites_Andaman\golden-pebble\public\hero-bg-video.mp4"
dst_desktop = r"D:\Golden_Websites_Andaman\golden-pebble\public\hero-bg-video-desktop.mp4"
dst_mobile = r"D:\Golden_Websites_Andaman\golden-pebble\public\hero-bg-video-mobile.mp4"

print("Encoding High Clarity Desktop version (CRF 18)...")
cmd_desktop = [
    ff, "-y", "-i", src,
    "-an",
    "-c:v", "libx264",
    "-preset", "slow",
    "-crf", "18",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    dst_desktop
]
subprocess.run(cmd_desktop, check=True)

print("Encoding High Clarity Mobile version (CRF 19, 720x1280)...")
cmd_mobile = [
    ff, "-y", "-i", src,
    "-an",
    "-c:v", "libx264",
    "-preset", "slow",
    "-crf", "19",
    "-vf", "crop=ih*9/16:ih:(iw-ow)/2:0,scale=720:1280",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    dst_mobile
]
subprocess.run(cmd_mobile, check=True)

print(f"Original size: {os.path.getsize(src) / (1024*1024):.2f} MB")
print(f"Desktop High Clarity size: {os.path.getsize(dst_desktop) / (1024*1024):.2f} MB")
print(f"Mobile High Clarity size: {os.path.getsize(dst_mobile) / (1024*1024):.2f} MB")
