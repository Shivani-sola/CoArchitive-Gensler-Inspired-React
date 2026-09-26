import React from "react";

// The approved app-icon logo (dark green tile, white bracket and O, tan "9"),
// used as-is everywhere the brand appears. Source: public/brand/coarchitive-logo.png
const LOGO_SRC = "/brand/coarchitive-logo.png";

export default function Logo({ size = 40, stacked = false }) {
  return (
    <span className={stacked ? "logo stacked" : "logo"}>
      <img className="mark" src={LOGO_SRC} width={size} height={size} alt="" />
      <span className="logo-text">
        <span className="logo-word">CoArchitive</span>
        <span className="logo-sub">Pvt. Ltd.</span>
      </span>
    </span>
  );
}
