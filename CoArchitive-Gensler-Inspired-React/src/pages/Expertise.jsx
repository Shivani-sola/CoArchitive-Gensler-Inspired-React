import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PageHero } from "../components/UI.jsx";
import { EXPERTISE } from "../data.js";

export default function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="One practice. Many disciplines."
        lede="Eight verticals that are staffed as one team. Most of our work sits where two or three of them overlap."
      />

      <section className="sec split">
        <div className="split-media">
          <div
            className="split-img"
            style={{ backgroundImage: `url(${EXPERTISE[Math.max(active, 0)].img})` }}
          />
        </div>
        <div className="acc">
          {EXPERTISE.map((e, i) => {
            const on = active === i;
            return (
              <button
                key={e.slug}
                className={on ? "acc-row on" : "acc-row"}
                onClick={() => setActive(on ? -1 : i)}
                aria-expanded={on}
              >
                <span className="acc-no">{e.no}</span>
                <strong>{e.title}</strong>
                {on ? <Minus size={20} /> : <Plus size={20} />}
                {on && <p>{e.body}</p>}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
