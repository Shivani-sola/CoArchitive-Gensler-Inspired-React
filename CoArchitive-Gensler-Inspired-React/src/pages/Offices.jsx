import React from "react";
import { MapPin } from "lucide-react";
import { PageHero } from "../components/UI.jsx";
import { OFFICES } from "../data.js";

export default function Offices() {
  return (
    <>
      <PageHero
        eyebrow="Offices"
        title="Where we work from."
        lede="A central studio, regional teams and project offices established close to the work."
      />

      <section className="sec">
        <div className="office-list">
          {OFFICES.map((o) => (
            <article key={o.city} className="office">
              <div className="office-city">
                <MapPin size={16} />
                <h3>{o.city}</h3>
                <span>{o.region}</span>
              </div>
              <p>{o.detail}</p>
              <a href={`mailto:${o.email}`}>{o.email}</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
