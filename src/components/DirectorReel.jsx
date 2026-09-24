import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

/**
 * Half-width media panel for the People hero.
 *
 * Plays `src` when the file exists. Until it does, it falls back to a slow
 * crossfading reel of the directors' own portraits with a gentle push-in, so
 * the panel has motion and shows the right faces rather than sitting empty.
 *
 * Both are skipped under prefers-reduced-motion, which leaves a single still.
 */
export default function DirectorReel({ src, people, interval = 4200 }) {
  const video = useRef(null);
  const [hasVideo, setHasVideo] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [i, setI] = useState(0);

  const calm =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // try the real clip first
  useEffect(() => {
    const el = video.current;
    if (!el || calm) return;
    el.play().then(
      () => setPlaying(true),
      () => setPlaying(false)
    );
  }, [calm, hasVideo]);

  // portrait reel — only runs while there is no video to show
  useEffect(() => {
    if (hasVideo || calm || people.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % people.length), interval);
    return () => clearInterval(t);
  }, [hasVideo, calm, people.length, interval]);

  const toggle = () => {
    const el = video.current;
    if (!el) return;
    if (el.paused) el.play().then(() => setPlaying(true), () => {});
    else {
      el.pause();
      setPlaying(false);
    }
  };

  const names = people.map((p) => p.name).join(", ");

  return (
    <div className="reel" role="img" aria-label={`CoArchitive directors: ${names}`}>
      {people.map((p, n) => (
        <img
          key={p.name}
          className={n === i ? "reel-shot on" : "reel-shot"}
          src={p.photo}
          alt=""
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.src = p.fallback;
          }}
        />
      ))}

      <video
        ref={video}
        className={hasVideo ? "reel-video" : "reel-video gone"}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setHasVideo(false)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      {hasVideo && (
        <button
          className="reel-btn"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
      )}
    </div>
  );
}
