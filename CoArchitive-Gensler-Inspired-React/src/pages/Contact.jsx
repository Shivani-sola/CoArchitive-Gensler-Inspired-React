import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { PageHero } from "../components/UI.jsx";
import { EXPERTISE, CONTACT, HEAD_OFFICE } from "../data.js";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lede="Tell us what you're trying to solve. If it isn't our work, we'll say so and point you somewhere useful."
      />

      <section className="sec contact-layout">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="org">Organisation</label>
            <input id="org" />
          </div>
          <div className="field">
            <label htmlFor="topic">What is this about?</label>
            <select id="topic" defaultValue="">
              <option value="" disabled>
                Select an area
              </option>
              {EXPERTISE.map((e) => (
                <option key={e.slug} value={e.slug}>
                  {e.title}
                </option>
              ))}
              <option value="other">Something else</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="msg">Your message</label>
            <textarea id="msg" rows={6} required />
          </div>
          <button type="submit" className="btn-lg">
            Send enquiry <ArrowRight size={18} />
          </button>
          {sent && (
            <p className="sent">
              Thanks — this demo form doesn't submit anywhere yet. Wire it to your inbox or CRM
              before launch.
            </p>
          )}
        </form>

        <aside className="contact-side">
          <div>
            <span className="eyebrow">General enquiries</span>
            <a href={`mailto:${CONTACT.email}`}>
              <Mail size={16} /> {CONTACT.email}
            </a>
          </div>
          <div>
            <span className="eyebrow">Telephone</span>
            <a href={CONTACT.phoneHref}>
              <Phone size={16} /> {CONTACT.phone}
            </a>
          </div>
          <div>
            <span className="eyebrow">{HEAD_OFFICE.label}</span>
            <address className="side-address">
              <MapPin size={16} />
              <span>
                {HEAD_OFFICE.lines.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </span>
            </address>
          </div>
          <div>
            <span className="eyebrow">Connect</span>
            <p>
              <Linkedin size={16} /> LinkedIn · CoArchitive
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
