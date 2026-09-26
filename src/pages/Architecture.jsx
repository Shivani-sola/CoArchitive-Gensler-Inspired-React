import React from "react";
import { PageHero, SectionHead, Principles, ScrollStatement, ServiceGrid, ConsultPopup } from "../components/UI.jsx";
import { ARCH_SERVICES, ARCH_IDEAS, ARCH_AREAS } from "../data.js";

export default function Architecture() {
  return (
    <>
      <PageHero
        eyebrow="Architecture"
        title="Spaces designed for people, *built for tomorrow.*"
        lede="Architecture that responds to climate, context and the people who use it — from a single home to a complete development."
        img="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85"
        meta={["Residential · Commercial · Interior", "Vastu consultancy", "Concept → turnkey"]}
      />

      <ScrollStatement
        kicker="How we see architecture"
        text="Every building should give back — to the people inside it, the street outside it and the *climate around it.*"
      />

      <section className="sec">
        <SectionHead kicker="What we do" title="Architecture *focus areas*" />
        <Principles items={ARCH_AREAS} />
      </section>

      <section className="sec grey">
        <SectionHead kicker="Architectural services" title="From first plan *to final render*" link="contact" linkLabel="Book a consultation" />
        <ServiceGrid items={ARCH_SERVICES} />
        <ConsultPopup />
      </section>

      <section className="sec">
        <SectionHead kicker="Ideas we build with" title="Sustainable by *design, not by add-on*" />
        <Principles items={ARCH_IDEAS} />
      </section>
    </>
  );
}
