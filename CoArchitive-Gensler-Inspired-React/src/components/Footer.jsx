import React from "react";
import { Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import { Link } from "../router.jsx";
import Logo from "./Logo.jsx";
import { NAV, TAGLINE, COMPANY, CONTACT, HEAD_OFFICE } from "../data.js";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-top">
        <div className="ftr-cta">
          <h2>
            Have a complex challenge?
            <br />
            <em>Let’s shape it together.</em>
          </h2>
          <Link to="contact" className="btn-lg">
            Start a conversation <ArrowRight size={18} />
          </Link>
        </div>

        <form className="ftr-news" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="news">Sign up for our newsletter</label>
          <div className="ftr-news-row">
            <input id="news" type="email" placeholder="Email address" required />
            <button type="submit" aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </div>
          <p>Research, project news and perspectives. No more than monthly.</p>
        </form>
      </div>

      <div className="ftr-cols">
        <div>
          <h4>Navigate</h4>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <h4>Practice</h4>
          <Link to="about">Guiding principles</Link>
          <Link to="about">Fact sheet</Link>
          <Link to="expertise">Sustainability</Link>
          <Link to="careers">Working here</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <Link to="offices">Offices</Link>
          <Link to="careers">Open roles</Link>
        </div>
        <div>
          <h4>{HEAD_OFFICE.label}</h4>
          <address className="ftr-address">
            {HEAD_OFFICE.lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </address>
          <div className="ftr-social">
            <a href="#/contact" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#/contact" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#/contact" aria-label="X"><Twitter size={18} /></a>
          </div>
        </div>
      </div>

      <div className="ftr-base">
        <Logo size={34} />
        <span>{TAGLINE}</span>
        <span>© 2026 {COMPANY}</span>
        <span>Privacy · Terms · Ethics</span>
      </div>
    </footer>
  );
}
