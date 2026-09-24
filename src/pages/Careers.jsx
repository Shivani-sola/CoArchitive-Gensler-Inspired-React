import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero, SectionHead } from "../components/UI.jsx";
import { ROLES, VALUES, CONTACT } from "../data.js";

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build across boundaries."
        lede="If you want to work next to people whose training is nothing like yours, this is the right practice."
        img="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
      />

      <section className="sec">
        <SectionHead kicker="Open roles" title="Where we're hiring" />
        <div className="roles">
          {ROLES.map((r) => (
            <a
              key={r.title}
              href={`mailto:${CONTACT.email}?subject=Application: ${r.title}`}
              className="role"
            >
              <h3>{r.title}</h3>
              <span>{r.team}</span>
              <span>{r.type}</span>
              <span>{r.loc}</span>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
        <p className="note">
          Don't see your discipline? Write to{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> — we read everything.
        </p>
      </section>

      <section className="sec grey">
        <SectionHead kicker="Working here" title="What you can expect" />
        <div className="values">
          {VALUES.map(([t, d]) => (
            <div key={t}>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
