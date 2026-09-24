import React, { useState } from "react";
import { PageHero, Card } from "../components/UI.jsx";
import { INSIGHTS, INSIGHT_FILTERS } from "../data.js";

export default function Insights() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? INSIGHTS : INSIGHTS.filter((i) => i.category === filter);
  const [lead, ...rest] = list;

  return (
    <>
      <PageHero
        eyebrow="Research & Insights"
        title="What we're learning."
        lede="Research, perspectives and working notes from across architecture, planning, mobility, environment and technology."
      />

      <section className="sec">
        <div className="filters">
          {INSIGHT_FILTERS.map((f) => (
            <button key={f} className={filter === f ? "chip on" : "chip"} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
          <span className="count">{list.length} articles</span>
        </div>

        {lead && (
          <div className="feed">
            <Card
              size="wide"
              to="contact"
              img={lead.img}
              category={lead.category}
              meta={lead.date}
              title={lead.title}
              blurb={lead.blurb}
            />
          </div>
        )}

        <div className="feed three" style={{ marginTop: 48 }}>
          {rest.map((i) => (
            <Card
              key={i.slug}
              to="contact"
              img={i.img}
              category={i.category}
              meta={i.date}
              title={i.title}
              blurb={i.blurb}
            />
          ))}
        </div>
      </section>
    </>
  );
}
