import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "../router.jsx";
import { SectionHead } from "../components/UI.jsx";
import { DIRECTORS, TEAM, VALUES } from "../data.js";

// Portrait stacks the real photo over a placeholder. If public/team/<slug>.jpg
// is missing the browser just paints the layer beneath it.
function Person({ name, photo, fallback }) {
  return (
    <article className="person">
      <div
        className="person-img"
        role="img"
        aria-label={name}
        style={{ backgroundImage: `url(${photo}), url(${fallback})` }}
      />
      <h3>{name}</h3>
    </article>
  );
}

export default function People() {
  return (
    <>
      {/* copy on the left half, photograph filling the right half */}
      <section className="hero-split">
        <div className="hero-split-copy">
          <span className="eyebrow">People</span>
          <h1>Different expertise. Shared purpose.</h1>
          <p>
            Designers, planners, engineers, analysts, researchers and technology specialists,
            organised around project goals rather than departments.
          </p>
        </div>
        <div
          className="hero-split-media"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1800&q=80)",
          }}
        />
      </section>

      <section className="sec">
        <SectionHead kicker="Directors" title="Us" />
        <div className="people-grid three">
          {DIRECTORS.map((p) => (
            <Person key={p.name} {...p} />
          ))}
        </div>
      </section>

      <section className="sec">
        <SectionHead kicker="Our team" title="Expert members" />
        <div className="people-grid three">
          {TEAM.map((p) => (
            <Person key={p.name} {...p} />
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
