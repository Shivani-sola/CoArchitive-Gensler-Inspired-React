import React, { useState, useEffect, useRef } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "../router.jsx";
import Logo from "./Logo.jsx";
import { useScrollFrame } from "./Motion.jsx";
import { NAV, TAGLINE } from "../data.js";

export default function Header({ route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const bar = useRef(null);

  // one frame loop drives both the solid state and the reading-progress line
  useScrollFrame(() => {
    const y = window.scrollY;
    setScrolled(y > 12);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.current?.style.setProperty("--read", max > 0 ? (y / max).toFixed(4) : "0");
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  // on the home page the bar sits transparent over the dark hero until scrolled
  const over = route === "home" && !scrolled && !open;
  const cls = ["hdr", scrolled && "scrolled", over && "over", open && "menu-open"].filter(Boolean).join(" ");

  return (
    <>
      <header className={cls}>
        <Link to="home" className="logo-link" onClick={close}>
          <Logo size={scrolled ? 34 : 40} />
        </Link>

        <nav className="hdr-nav">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className={route === n.to ? "on" : ""}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hdr-right">
          <button className="icon-btn" aria-label="Search">
            <Search size={18} />
          </button>
          <Link to="contact" className="btn-sm">
            Contact Us
          </Link>
          <button
            className={open ? "icon-btn burger open" : "icon-btn burger"}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
        <div className="hdr-read" ref={bar} aria-hidden="true" />
      </header>

      <div className={open ? "menu-overlay open" : "menu-overlay"}>
        <div className="menu-inner">
          {[...NAV, { to: "contact", label: "Contact Us" }].map((n, i) => (
            <Link key={n.to} to={n.to} onClick={close} className="menu-item" style={{ "--i": i }}>
              <span className="menu-no">{String(i + 1).padStart(2, "0")}</span>
              {n.label}
              <ArrowRight size={20} />
            </Link>
          ))}
          <p className="menu-tagline">{TAGLINE}</p>
        </div>
      </div>
    </>
  );
}
