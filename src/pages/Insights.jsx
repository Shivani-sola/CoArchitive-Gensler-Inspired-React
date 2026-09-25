import React, { useState } from "react";
import { PageHero, Card, Filters, FeedCta } from "../components/UI.jsx";
import { INSIGHTS, INSIGHT_FILTERS } from "../data.js";

export default function Insights() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? INSIGHTS : INSIGHTS.filter((i) => i.category === filter);
  const [lead, ...rest] = list;

  return (
    <>
      <PageHero
        eyebrow="Research & Insights"
        title="What we're *learning.*"
        lede="Research, perspectives and working notes from across architecture, planning, mobility, environment and technology."
        meta={[`${INSIGHTS.length} articles`, `Latest · ${INSIGHTS[0].date}`, "Research · perspective · digital"]}
      />

      <section className="sec">
        <Filters
          options={INSIGHT_FILTERS}
          value={filter}
          onChange={setFilter}
          count={`${list.length} ${list.length === 1 ? "article" : "articles"}`}
        />

        {/* keyed on the filter so the cards play their entrance again */}
        <div className="feed" key={filter}>
          {lead && <Card size="wide" to="contact" img={lead.img} category={lead.category} meta={lead.date} title={lead.title} blurb={lead.blurb} />}
          {rest.map((i, k) => (
            <Card key={i.slug} to="contact" img={i.img} category={i.category} meta={i.date} title={i.title} blurb={i.blurb} delay={(k % 3) * 90} />
          ))}
          <FeedCta count={rest.length} kicker="Stay in touch" title="Research, *once a month.*" to="contact" label="Get in touch" delay={180} />
        </div>
      </section>
    </>
  );
}
