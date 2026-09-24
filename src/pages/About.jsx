import React from "react";
import { PageHero, SectionHead, Stats } from "../components/UI.jsx";
import { STATS, VALUES } from "../data.js";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We connect disciplines to solve complex challenges."
        lede="Innovative. Sustainable. Data-driven. CoArchitive was built for projects where the problem crosses conventional boundaries."
        img="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85"
      />

      <section className="sec two-col">
        <div>
          <span className="eyebrow">The practice</span>
          <h2>A single team across the built environment and the systems that run it.</h2>
        </div>
        <div className="prose">
          <p>
            Our work spans the built environment and the systems that make places function. We work
            with government, private organizations, academic institutions and development partners.
          </p>
          <p>
            From concept and masterplanning to GIS, simulation, software and advisory, our
            multidisciplinary model is designed for projects where a single discipline would give a
            partial answer.
          </p>
          <p>
            That means the planner, the transport modeller and the software engineer are in the same
            room from week one — and the deliverable is something the client's own team can operate.
          </p>
        </div>
      </section>

      <section className="sec grey">
        <Stats items={STATS} />
      </section>

      <section className="sec">
        <SectionHead kicker="Guiding principles" title="What we hold to" />
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
