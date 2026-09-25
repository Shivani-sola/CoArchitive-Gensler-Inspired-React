import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "../router.jsx";
import { PageHero, SectionHead, Principles } from "../components/UI.jsx";
import { Reveal } from "../components/Motion.jsx";
import { DIRECTORS, TEAM, VALUES } from "../data.js";

// Portrait stacks the real photo over a placeholder. If public/team/<slug>.jpg
// is missing the browser just paints the layer beneath it.
function Person({ name, role, photo, fallback, delay }) {
  return (
    <Reveal as="article" variant="clip" className="person" delay={delay}>
      <div
        className="person-img"
        role="img"
        aria-label={name}
        style={{ backgroundImage: `url(${photo}), url(${fallback})` }}
      />
      <h3>{name}</h3>
      {role && <span>{role}</span>}
    </Reveal>
  );
}

function PeopleGroup({ index, label, blurb, people, children }) {
  return (
    <div className="people-group">
      <Reveal as="header" className="people-group-head">
        <span className="people-group-index">{index}</span>
        <h3>{label}</h3>
        <p>{blurb}</p>
      </Reveal>
      <div className="people-grid three">
        {people.map((p, i) => (
          <Person key={p.name} {...p} delay={i * 110} />
        ))}
        {children && (
          <Reveal variant="clip" delay={people.length * 110}>
            {children}
          </Reveal>
        )}
      </div>
    </div>
  );
}

export default function People() {
  return (
    <>
      {/* half-height band, copy sitting on the image */}
      <PageHero
        half
        eyebrow="People"
        title="Different expertise. *Shared purpose.*"
        lede="Designers, planners, engineers, analysts, researchers and technology specialists, organised around project goals rather than departments."
        img="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80"
      />

      {/* two groups on the same three-column grid, so the team portraits line
          up under the directors. The spare team slot invites the next hire. */}
      <section className="sec">
        <SectionHead kicker="Directors & team" title="Who we are" />
        <PeopleGroup
          index="01"
          label="Directors"
          blurb="Setting the direction of the practice and leading every engagement."
          people={DIRECTORS}
        />
        <PeopleGroup
          index="02"
          label="Team"
          blurb="Specialists who carry the work from first brief to delivery."
          people={TEAM}
        >
          <Link to="careers" className="person-join">
            <span className="eyebrow">Careers</span>
            <strong>Your place could be here.</strong>
            <em>
              See open roles <ArrowRight size={15} />
            </em>
          </Link>
        </PeopleGroup>
      </section>

      <section className="sec grey">
        <SectionHead kicker="How we work" title="Four things *we hold to*" />
        <Principles items={VALUES} />
        <Link to="careers" className="text-link">
          See open roles <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
