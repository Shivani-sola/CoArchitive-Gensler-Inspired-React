import React, { useState } from "react";

/**
 * Brand lockup: cream tile, green "[" and tan "]" brackets with a green counter
 * between them, gaps left open at every stroke end.
 *
 * Drop the supplied artwork at `public/brand/coarchitive-mark.png` (or .svg and
 * change MARK_SRC) and it is used instead. Until that file exists <MarkSvg>
 * stands in — a reconstruction, not the original artwork.
 */
const MARK_SRC = "/brand/coarchitive-mark.png";

export function MarkSvg({ size = 40 }) {
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="CoArchitive"
    >
      <rect width="120" height="120" fill="var(--cream)" />

      {/* left bracket — green. Arms stop short of the counter, leaving a gap. */}
      <path
        d="M46 20H30a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h16"
        fill="none"
        stroke="var(--green)"
        strokeWidth="12"
      />

      {/* right bracket — tan */}
      <path
        d="M74 20h16a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8H74"
        fill="none"
        stroke="var(--sand)"
        strokeWidth="12"
      />
      {/* gap punched through the tan lower arm */}
      <path d="M78 100h12" stroke="var(--cream)" strokeWidth="6" strokeLinecap="round" />

      {/* centre counter + stem */}
      <rect
        x="49"
        y="30"
        width="22"
        height="60"
        rx="11"
        fill="none"
        stroke="var(--green)"
        strokeWidth="9"
      />
      <path d="M60 46v28" stroke="var(--green)" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ size = 40, stacked = false }) {
  const [missing, setMissing] = useState(false);

  return (
    <span className={stacked ? "logo stacked" : "logo"}>
      {missing ? (
        <MarkSvg size={size} />
      ) : (
        <img
          className="mark"
          src={MARK_SRC}
          height={size}
          width={size}
          alt=""
          onError={() => setMissing(true)}
        />
      )}
      <span className="logo-text">
        <span className="logo-word">CoArchitive</span>
        <span className="logo-sub">Pvt. Ltd.</span>
      </span>
    </span>
  );
}
