Drop the official CoArchitive artwork here.

Required filename:
  coarchitive-mark.png     <- the cream tile with the bracket mark, SQUARE,
                              no wordmark underneath it

The site renders "CoArchitive / Pvt. Ltd." as live text beside the tile, so crop
the image to just the symbol — otherwise the name appears twice. Export at 2x
(e.g. 160x160) so it stays crisp on retina screens. An SVG is better still: save
it as coarchitive-mark.svg and change MARK_SRC in src/components/Logo.jsx.

Until this file exists, src/components/Logo.jsx falls back to an inline SVG
reconstruction. It is approximate — replace it.

Brand colours sampled from the supplied logo (already set in src/styles.css):
  forest green   #3E4F26   text-level emphasis; 8.2:1 on white
  sand / tan     #B49B72   decorative, and text on dark grounds
  cream tile     #F7F4E8   the mark's own ground
