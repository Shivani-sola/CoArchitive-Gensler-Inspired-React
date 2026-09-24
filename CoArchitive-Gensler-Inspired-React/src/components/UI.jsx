import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "../router.jsx";

export function PageHero({ eyebrow, title, lede, img }) {
  return (
    <section className={img ? "phero has-img" : "phero"}>
      {img && (
        <>
          <div className="phero-img" style={{ backgroundImage: `url(${img})` }} />
          <div className="phero-scrim" />
        </>
      )}
      <div className="phero-body">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ kicker, title, link, linkLabel }) {
  return (
    <div className="shead">
      <div>
        {kicker && <span className="eyebrow">{kicker}</span>}
        <h2>{title}</h2>
      </div>
      {link && (
        <Link to={link} className="text-link">
          {linkLabel} <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}

export function Card({ to, img, category, meta, title, blurb, size = "" }) {
  return (
    <Link to={to} className={`card ${size}`}>
      <div className="card-media">
        <div className="card-img" style={{ backgroundImage: `url(${img})` }} />
      </div>
      <div className="card-body">
        <span className="card-cat">
          {category}
          {meta ? <em>{meta}</em> : null}
        </span>
        <h3>{title}</h3>
        {blurb && <p>{blurb}</p>}
        <span className="card-go">
          Learn more <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}

export function Stats({ items }) {
  return (
    <div className="stats">
      {items.map(([n, label]) => (
        <div key={label}>
          <b>{n}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
