import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Check, AlertCircle } from "lucide-react";
import { PageHero } from "../components/UI.jsx";
import { Reveal, Magnetic } from "../components/Motion.jsx";
import { EXPERTISE, CONTACT, HEAD_OFFICE } from "../data.js";

// Enquiries POST to a Google Apps Script web app, which appends a row to the
// enquiries spreadsheet and emails it on. Set VITE_ENQUIRY_ENDPOINT in Vercel
// (see docs/enquiry-form-setup.md). Without it the form falls back to opening
// the visitor's mail client, so an enquiry is never silently lost.
const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT;

const mailtoFallback = (data) => {
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Organisation: ${data.org || "—"}`,
    `About: ${data.topic || "—"}`,
    "",
    data.message,
  ].join("\n");
  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Website enquiry from ${data.name}`
  )}&body=${encodeURIComponent(body)}`;
};

export default function Contact() {
  // idle | sending | sent | error
  const [state, setState] = useState("idle");
  const sent = state === "sent";

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!ENDPOINT) {
      mailtoFallback(data);
      return;
    }

    setState("sending");
    try {
      // text/plain keeps this a CORS "simple request", so the browser sends it
      // straight through — Apps Script cannot answer a preflight OPTIONS.
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...data, sentAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a *conversation.*"
        lede="Tell us what you're trying to solve. If it isn't our work, we'll say so and point you somewhere useful."
        meta={[CONTACT.email, CONTACT.phone, "Medchal Malkajgiri, Telangana"]}
      />

      <section className="sec contact-layout">
        <Reveal>
          <form className="form" onSubmit={submit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="org">Organisation</label>
              <input id="org" name="org" autoComplete="organization" />
            </div>
            <div className="field">
              <label htmlFor="topic">What is this about?</label>
              <select id="topic" name="topic" defaultValue="">
                <option value="" disabled>
                  Select an area
                </option>
                {EXPERTISE.map((e) => (
                  <option key={e.slug} value={e.title}>
                    {e.title}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="msg">Your message</label>
              <textarea id="msg" name="message" rows={6} required />
            </div>
            {/* bots fill hidden fields; people never see this one */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hp-field"
            />
            <div className="form-foot">
              <Magnetic>
                <button type="submit" className="btn-lg" disabled={state === "sending"}>
                  {state === "sending" ? "Sending…" : "Send enquiry"} <ArrowRight size={18} />
                </button>
              </Magnetic>
              {sent && (
                <p className="sent" role="status">
                  <Check size={16} /> Thank you — your enquiry has reached us. We usually reply
                  within two working days.
                </p>
              )}
              {state === "error" && (
                <p className="sent error" role="alert">
                  <AlertCircle size={16} /> That didn't go through. Please email us directly at{" "}
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                </p>
              )}
            </div>
          </form>
        </Reveal>

        <aside className="contact-side">
          <Reveal>
            <span className="eyebrow">General enquiries</span>
            <a href={`mailto:${CONTACT.email}`}>
              <Mail size={16} /> {CONTACT.email}
            </a>
          </Reveal>
          <Reveal delay={90}>
            <span className="eyebrow">Telephone</span>
            <a href={CONTACT.phoneHref}>
              <Phone size={16} /> {CONTACT.phone}
            </a>
          </Reveal>
          <Reveal delay={180}>
            <span className="eyebrow">{HEAD_OFFICE.label}</span>
            <address className="side-address">
              <MapPin size={16} />
              <span>
                {HEAD_OFFICE.lines.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </span>
            </address>
          </Reveal>
          <Reveal delay={270}>
            <span className="eyebrow">Connect</span>
            <p>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} /> LinkedIn · CoArchitive
              </a>
            </p>
          </Reveal>
        </aside>
      </section>
    </>
  );
}
