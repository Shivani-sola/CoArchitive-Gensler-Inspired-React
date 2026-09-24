import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "../router.jsx";
import { PageHero, SectionHead } from "../components/UI.jsx";
import { LEADERSHIP, VALUES } from "../data.js";

export default function People() {
  return (
    <>
      <PageHero
        eyebrow="People"
        title="Different expertise. Shared purpose."
        lede="Designers, planners, engineers, analysts, researchers and technology specialists, organised around project goals rather than departments."
      />

      <section className="sec">
        <SectionHead kicker="Leadership" title="Who leads the work" />
        <div className="people-grid">
          {LEADERSHIP.map((p) => (
            <article key={p.role} className="person">
              <div className="person-img" style={{ backgroundImage: `url(${p.img})` }} />
              <h3>{p.name}</h3>
              <span>{p.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="sec grey">
        <SectionHead kicker="How we work" title="Four things we hold to" />
        <div className="values">
          {VALUES.map(([t, d]) => (
            <div key={t}>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <Link to="careers" className="text-link">
          See open roles <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
