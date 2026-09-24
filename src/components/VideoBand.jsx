import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

/**
 * Full-bleed video band.
 *
 * The <video> is layered over the poster image, so if the file at `src` is
 * missing the poster simply stays visible and the section still reads as
 * finished — same fallback idea as the team portraits.
 *
 * Autoplay is muted and inline (browsers block sound-on autoplay), and is
 * skipped entirely for visitors who ask for reduced motion.
 */
export default function VideoBand({ src, poster, eyebrow, title, body }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hasVideo, setHasVideo] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const calm = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (calm) return;
    el.play().then(
      () => setPlaying(true),
      () => setPlaying(false) // autoplay refused — poster stays, control still works
    );
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) el.play().then(() => setPlaying(true), () => {});
    else {
      el.pause();
      setPlaying(false);
    }
  };

  // Text is optional — with none, the band is purely visual and the scrim
  // stays light, since it is no longer there to keep copy readable.
  const hasText = Boolean(eyebrow || title || body);

  return (
    <section className={hasText ? "vband" : "vband bare"}>
      <div className="vband-media">
        <img className="vband-poster" src={poster} alt="" />
        <video
          ref={ref}
          className={hasVideo ? "vband-video" : "vband-video gone"}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setHasVideo(false)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <div className="vband-scrim" />
      </div>

      {hasText && (
        <div className="vband-body">
          {eyebrow && <span className="eyebrow light">{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {body && <p>{body}</p>}
        </div>
      )}

      {hasVideo && (
        <button className="vband-btn" onClick={toggle} aria-label={playing ? "Pause video" : "Play video"}>
          {playing ? <Pause size={18} /> : <Play size={18} />}
          <span>{playing ? "Pause" : "Play"}</span>
        </button>
      )}
    </section>
  );
}
