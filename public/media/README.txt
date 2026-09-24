Drop the directors' video here:

  directors.mp4    <- the three directors talking to each other

It fills the right half of the People page hero. Until the file exists,
that panel crossfades between the three directors' portraits instead, so it
shows the right faces and still has movement. No code change is needed when
you add the file - it takes over automatically.

What to shoot
-------------
  who       Aneesha, Shreedha and Nakka, in conversation with each other
  framing   LANDSCAPE, but the panel is a tall half-screen crop, so keep
            everyone near the centre - the sides get cut off
  action    genuine talking, gesturing, looking at a drawing. No posing at
            the camera and no one addressing it
  length    10-20 seconds, and it must LOOP cleanly - it repeats forever
  audio     irrelevant, it plays muted. Browsers refuse to autoplay sound

A phone on a table or a small tripod is fine. Hold the shot steady and let
the conversation run - the loop reads better with slow movement than with
fast cuts.

Export
------
  MP4, H.264 + AAC, 1280x720, under ~5 MB. It autoplays, so a heavy file
  punishes anyone on mobile data.

  ffmpeg -i input.mp4 -t 15 -an -vf "scale=1280:-2" -c:v libx264 -crf 26 \
         -preset slow -movflags +faststart directors.mp4

(-an strips the audio track, -movflags +faststart lets playback begin before
the file has fully downloaded)
