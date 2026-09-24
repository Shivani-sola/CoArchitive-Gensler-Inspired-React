import React, { useState } from "react";
import { PageHero, Card } from "../components/UI.jsx";
import { PROJECTS, PROJECT_FILTERS } from "../data.js";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Ideas into impact."
        lede="Illustrative directions from across the practice — buildings, plans, networks and platforms."
      />

      <section className="sec">
        <div className="filters">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              className={filter === f ? "chip on" : "chip"}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
          <span className="count">{list.length} projects</span>
        </div>

        <div className="feed three">
          {list.map((p) => (
            <Card
              key={p.slug}
              to="contact"
              img={p.img}
              category={p.category}
              meta={p.meta}
              title={p.title}
              blurb={p.blurb}
            />
          ))}
        </div>
      </section>
    </>
  );
}
