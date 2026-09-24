import React, { useState, useEffect } from "react";
import { Menu, X, Search, ArrowRight } from "lucide-react";
import { Link } from "../router.jsx";
import Logo from "./Logo.jsx";
import { NAV, TAGLINE } from "../data.js";

export default function Header({ route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={scrolled ? "hdr scrolled" : "hdr"}>
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
            className="icon-btn burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div className={open ? "menu-overlay open" : "menu-overlay"}>
        <div className="menu-inner">
          {[...NAV, { to: "contact", label: "Contact Us" }].map((n, i) => (
            <Link key={n.to} to={n.to} onClick={close} className="menu-item">
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
