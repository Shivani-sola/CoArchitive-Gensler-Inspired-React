import React from "react";
import { PageHero, SectionHead, Stats, Principles, ScrollStatement, HoverList } from "../components/UI.jsx";
import { Reveal } from "../components/Motion.jsx";
import { STATS, VALUES, SECTORS } from "../data.js";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We connect disciplines to solve *complex challenges.*"
        lede="Innovative. Sustainable. Data-driven. CoArchitive was built for projects where the problem crosses conventional boundaries."
        img="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2200&q=85"
        meta={["Est. Telangana, India", "8 disciplines", "One integrated team"]}
      />

      <ScrollStatement
        kicker="Why we exist"
        text="Complex places rarely fail for lack of expertise. They fail in the *handovers* between experts — so we built a practice without them."
      />

      <section className="sec two-col">
        <Reveal className="two-col-head">
          <span className="eyebrow">The practice</span>
          <h2>
            A single team across the built environment <em>and the systems that run it.</em>
          </h2>
        </Reveal>
        <div className="prose">
          <Reveal as="p">
            Our work spans the built environment and the systems that make places function. We work
            with government, private organizations, academic institutions and development partners.
          </Reveal>
          <Reveal as="p" delay={90}>
            From concept and masterplanning to GIS, simulation, software and advisory, our
            multidisciplinary model is designed for projects where a single discipline would give a
            partial answer.
          </Reveal>
          <Reveal as="p" delay={180}>
            That means the planner, the transport modeller and the software engineer are in the same
            room from week one — and the deliverable is something the client's own team can operate.
          </Reveal>
        </div>
      </section>

      <section className="sec dark">
        <SectionHead kicker="In numbers" title="The practice *at a glance*" />
        <Stats items={STATS} />
      </section>

      <section className="sec">
        <SectionHead kicker="Who we work with" title="Four kinds of client, *one way of working*" link="contact" linkLabel="Start a conversation" />
        <HoverList items={SECTORS.map((s) => ({ ...s, to: "contact" }))} />
      </section>

      <section className="sec grey">
        <SectionHead kicker="Guiding principles" title="What we hold to" />
        <Principles items={VALUES} />
      </section>
    </>
  );
}
