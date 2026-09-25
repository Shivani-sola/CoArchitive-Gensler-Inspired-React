import React, { useState } from "react";
import { PageHero, Card, Filters, FeedCta } from "../components/UI.jsx";
import { PROJECTS, PROJECT_FILTERS } from "../data.js";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const [lead, ...rest] = list;

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Ideas into *impact.*"
        lede="Illustrative directions from across the practice — buildings, plans, networks and platforms."
        meta={[`${PROJECTS.length} projects`, `${PROJECT_FILTERS.length - 1} sectors`, "Planning · design · data"]}
      />

      <section className="sec">
        <Filters
          options={PROJECT_FILTERS}
          value={filter}
          onChange={setFilter}
          count={`${list.length} ${list.length === 1 ? "project" : "projects"}`}
        />

        {/* keyed on the filter so the cards play their entrance again */}
        <div className="feed" key={filter}>
          {lead && <Card size="wide" to="contact" img={lead.img} category={lead.category} meta={lead.meta} title={lead.title} blurb={lead.blurb} />}
          {rest.map((p, i) => (
            <Card key={p.slug} to="contact" img={p.img} category={p.category} meta={p.meta} title={p.title} blurb={p.blurb} delay={(i % 3) * 90} />
          ))}
          <FeedCta count={rest.length} kicker="Your project" title="Have a place that needs *to work better?*" to="contact" label="Start a conversation" delay={180} />
        </div>
      </section>
    </>
  );
}
