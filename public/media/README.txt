Drop the studio video here:

  team-coffee.mp4     <- people talking over coffee, the People page band

Until the file exists the band shows its poster image instead, so the page
looks finished either way. No code change is needed when you add it.

What to supply
--------------
  format    MP4, H.264 + AAC (widest browser support)
  size      1920x1080 or 1280x720, landscape
  length    8-20 seconds, and it must LOOP cleanly - it repeats forever
  weight    under ~5 MB. It autoplays, so a heavy file punishes mobile users
  audio     will be muted; browsers refuse to autoplay video with sound

Also add a matching poster frame as team-coffee.jpg (a still from the clip is
ideal) and point `poster` at it in src/pages/People.jsx. Right now the poster
is an Unsplash placeholder.

Footage of YOUR team is much better than stock here - this band sits directly
under the five real portraits, and stock faces next to real ones is obvious.

If you do want stock, these are free and permissively licensed (Pexels licence:
free for commercial use, no attribution required). I could not download them
from this environment, so grab one manually:

  https://www.pexels.com/video/people-having-a-business-meeting-inside-a-cafe-6828718/
  https://www.pexels.com/video/coworkers-talking-at-the-office-6930835/
  https://www.pexels.com/video/group-of-people-having-coffee-and-sharing-ideas-7507645/

Download the HD (not 4K) version, rename it team-coffee.mp4, and put it here.

Compressing an oversized clip, if you have ffmpeg:
  ffmpeg -i input.mp4 -t 15 -an -vf "scale=1280:-2" -c:v libx264 -crf 26 \
         -preset slow -movflags +faststart team-coffee.mp4
(-an strips audio, -movflags +faststart lets it start before fully downloading)
