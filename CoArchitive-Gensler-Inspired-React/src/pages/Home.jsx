import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "../router.jsx";
import { Card, SectionHead, Stats } from "../components/UI.jsx";
import { FEATURE, FIELDS, PROJECTS, INSIGHTS, EXPERTISE, STATS } from "../data.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-img" style={{ backgroundImage: `url(${FEATURE.img})` }} />
        <div className="hero-scrim" />
        <div className="hero-body">
          <span className="eyebrow light">{FEATURE.eyebrow}</span>
          <h1>{FEATURE.title}</h1>
          <p>{FEATURE.blurb}</p>
          <Link to={FEATURE.to} className="btn-lg light">
            {FEATURE.cta} <ArrowRight size={18} />
          </Link>
        </div>
        <div className="hero-foot">
          <span>CoArchitive Pvt. Ltd.</span>
          <span>Multidisciplinary consultancy · Telangana</span>
          <span>Scroll ↓</span>
        </div>
      </section>

      <section className="intro">
        <div className="intro-copy">
          <span className="eyebrow">Who we are</span>
          <h2 className="intro-statement">
            CoArchitive is a <em>multidisciplinary</em> consultancy and technology practice.
          </h2>
          <div className="intro-foot">
            <p>
              Seven connected fields, one team. Most of our work sits where several of them meet —
              which is usually where a single-discipline answer falls short.
            </p>
            <Link to="about" className="text-link">
              Discover CoArchitive <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <ul className="fields">
          {FIELDS.map((f, i) => (
            <li key={f}>
              <Link to="expertise">
                <span className="field-no">{String(i + 1).padStart(2, "0")}</span>
                <span className="field-name">{f}</span>
                <ArrowUpRight size={18} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec">
        <SectionHead
          kicker="Featured"
          title="What we're working on"
          link="projects"
          linkLabel="All projects"
        />
        <div className="feed">
          <Card
            size="wide"
            to="projects"
            img={PROJECTS[0].img}
            category={PROJECTS[0].category}
            title={PROJECTS[0].title}
            blurb={PROJECTS[0].blurb}
          />
          {PROJECTS.slice(1, 4).map((p) => (
            <Card
              key={p.slug}
              to="projects"
              img={p.img}
              category={p.category}
              title={p.title}
              blurb={p.blurb}
            />
          ))}
        </div>
      </section>

      <section className="sec dark">
        <SectionHead kicker="Expertise" title="One practice. Many disciplines." link="expertise" linkLabel="Explore expertise" />
        <div className="disc-grid">
          {EXPERTISE.map((e) => (
            <Link key={e.slug} to="expertise" className="disc">
              <span>{e.no}</span>
              <strong>{e.title}</strong>
              <p>{e.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="sec">
        <SectionHead
          kicker="Research & Insights"
          title="Questions worth exploring"
          link="insights"
          linkLabel="All insights"
        />
        <div className="feed three">
          {INSIGHTS.slice(0, 3).map((i) => (
            <Card
              key={i.slug}
              to="insights"
              img={i.img}
              category={i.category}
              meta={i.date}
              title={i.title}
              blurb={i.blurb}
            />
          ))}
        </div>
      </section>

      <section className="quote">
        <div className="quote-bg" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=2200&q=85)` }} />
        <div className="quote-inner">
          <span className="eyebrow light">Our approach</span>
          <h2>Design is stronger when disciplines work together.</h2>
          <p>
            We combine technical expertise, research, spatial thinking and technology to move from
            insight to implementable solutions.
          </p>
        </div>
      </section>

      <section className="sec">
        <Stats items={STATS} />
      </section>
    </>
  );
}
