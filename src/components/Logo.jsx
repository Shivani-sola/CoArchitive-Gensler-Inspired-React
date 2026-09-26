import React from "react";

/**
 * Brand mark, traced from the approved logo (2026 update): green "[" bracket,
 * green "O" with a slit at its foot, and a tan right bracket that ends in a
 * "9" foot with a pill-shaped cut. Drawn on a 540x660 grid and centred in a
 * square cream tile.
 */
export function MarkSvg({ size = 40 }) {
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="-60 0 660 660"
      role="img"
      aria-label="CoArchitive"
    >
      <rect x="-60" width="660" height="660" fill="var(--cream)" />

      {/* left bracket: collaboration */}
      <path
        d="M170 58H115A50 50 0 0 0 65 108V555A50 50 0 0 0 115 605H170"
        fill="none"
        stroke="var(--green)"
        strokeWidth="60"
        strokeLinecap="round"
      />

      {/* right bracket, ending in the "9" foot */}
      <path
        d="M365 58H420A50 50 0 0 1 470 108V560"
        fill="none"
        stroke="var(--sand)"
        strokeWidth="60"
        strokeLinecap="round"
      />
      <path
        d="M440 470V490Q440 515 415 515H380Q320 515 320 575V580Q320 640 380 640H440Q500 640 500 580V470Z"
        fill="var(--sand)"
      />
      <rect x="365" y="566" width="90" height="28" rx="14" fill="var(--cream)" />

      {/* the "O": people at the centre */}
      <rect x="204" y="177" width="124" height="296" rx="62" fill="none" stroke="var(--green)" strokeWidth="42" />
      <rect x="262" y="440" width="9" height="60" fill="var(--cream)" />
    </svg>
  );
}

export default function Logo({ size = 40, stacked = false }) {
  return (
    <span className={stacked ? "logo stacked" : "logo"}>
      <MarkSvg size={size} />
      <span className="logo-text">
        <span className="logo-word">CoArchitive</span>
        <span className="logo-sub">Pvt. Ltd.</span>
      </span>
    </span>
  );
}
