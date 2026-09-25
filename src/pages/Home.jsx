<<<<<<< HEAD
import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
=======
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ArrowLeft, Plus } from "lucide-react";
>>>>>>> Animation
import { Link } from "../router.jsx";
import { SectionHead, Contours, ScrollStatement } from "../components/UI.jsx";
import AtlasDemo from "../components/AtlasDemo.jsx";
import {
  Reveal,
  Counter,
  Magnetic,
  useScrollProgress,
  useScrollFrame,
  useTilt,
  reducedMotion,
  finePointer,
} from "../components/Motion.jsx";
import { HOME, EXPERTISE, PROJECTS, DIRECTORS, TEAM, CONTACT } from "../data.js";
import "../home.css";

// The home page tells one story top to bottom:
// problem → shift → how it works → capabilities → product → work → results
// → proof → people → questions → call to action.

const scrollToId = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" });

// ---------- 1. hero ----------

function Hero() {
  const ref = useRef(null);
  const glow = useRef(null);
  const [word, setWord] = useState(0);
  useScrollProgress(ref);

  useEffect(() => {
    if (reducedMotion()) return;
    const id = setInterval(() => setWord((w) => (w + 1) % HOME.heroWords.length), 2800);
    return () => clearInterval(id);
  }, []);

  // soft light that trails the cursor; transform only, so it stays on the GPU
  useEffect(() => {
    const el = ref.current;
    const g = glow.current;
    if (!finePointer() || reducedMotion()) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      g.style.transform = `translate3d(${e.clientX - r.left}px, ${e.clientY - r.top}px, 0)`;
      g.style.opacity = "1";
    };
    const leave = () => (g.style.opacity = "0");
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <section className="h-hero" ref={ref}>
      <div className="h-hero-glow" ref={glow} aria-hidden="true" />
      <Contours className="h-contours" count={11} cx={1180} cy={420} base={70} step={46} seed={1.7} />

      <div className="h-hero-grid">
        <div className="h-hero-copy">
          <span className="eyebrow h-in" style={{ "--d": "80ms" }}>
            Planning · Architecture · Mobility · Digital
          </span>

          <h1 className="h-title">
            <span className="sr-only">Places planned as one system.</span>
            <span className="h-line" aria-hidden="true">
              <span style={{ "--d": "160ms" }}>Places planned</span>
            </span>
            <span className="h-line" aria-hidden="true">
              <span style={{ "--d": "260ms" }}>
                as one{" "}
                <em className="h-rot">
                  <span key={word}>{HOME.heroWords[word]}.</span>
                </em>
              </span>
            </span>
          </h1>

          <p className="h-lede h-in" style={{ "--d": "460ms" }}>
            CoArchitive brings architecture, urban planning, mobility, environment and geospatial
            technology into one team — so cities and regions are designed as systems that work,
            not as disconnected projects.
          </p>

          <div className="h-actions h-in" style={{ "--d": "580ms" }}>
            <Magnetic>
              <Link to="contact" className="btn-lg light">
                Start a project <ArrowRight size={18} />
              </Link>
            </Magnetic>
            <button type="button" className="h-ghost" onClick={() => scrollToId("work")}>
              See our work
            </button>
          </div>
        </div>

        <div className="h-visual" aria-hidden="true">
          <div className="h-par" style={{ "--s": 70 }}>
            <div className="h-frame">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80"
                alt=""
                fetchpriority="high"
                decoding="async"
              />
              <svg className="h-plan" viewBox="0 0 400 520">
                <rect x="40" y="60" width="140" height="110" pathLength="1" />
                <rect x="210" y="60" width="150" height="190" pathLength="1" />
                <rect x="40" y="200" width="140" height="150" pathLength="1" />
                <rect x="210" y="280" width="150" height="70" pathLength="1" />
                <path d="M0 395 C120 380 260 420 400 390" pathLength="1" />
                <path d="M195 0 L195 520" pathLength="1" />
                <circle cx="195" cy="395" r="9" pathLength="1" />
              </svg>
            </div>
          </div>

          <div className="h-par h-float-a" style={{ "--s": -40 }}>
            <div className="h-float h-in" style={{ "--d": "900ms" }}>
              <span className="h-float-k">In delivery</span>
              <strong>Connected City Framework</strong>
              <span className="h-bar">
                <i />
              </span>
              <span className="h-float-meta">Phase 2 of 3 · 62%</span>
            </div>
          </div>

          <div className="h-par h-float-b" style={{ "--s": -110 }}>
            <div className="h-float small h-in" style={{ "--d": "1050ms" }}>
              <b>12</b>
              <span>data layers in one model</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-hero-foot h-in" style={{ "--d": "800ms" }}>
        <span>Est. Telangana, India</span>
        <span>8 disciplines · 1 team</span>
        <button type="button" onClick={() => scrollToId("problem")}>
          Scroll <i />
        </button>
      </div>
    </section>
  );
}

// ---------- 2. clients ----------

function Clients() {
  const list = HOME.clients;
  return (
    <section className="h-clients" aria-label="Clients">
      <p>Trusted by public agencies, developers and operators</p>
      <div className="h-marquee">
        <div className="h-marquee-track">
          {[...list, ...list].map((c, i) => (
            <span key={i} aria-hidden={i >= list.length}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- 4. the shift: fragments settle into one plan ----------

function Shift() {
  const ref = useRef(null);
  useScrollProgress(ref, "pinned");

  return (
    <section className="h-shift" ref={ref}>
      <div className="h-sticky h-shift-stage">
        <div className="h-shift-copy">
          <span className="eyebrow light">The shift</span>
          <h2>
            From fragments <em>to one plan.</em>
          </h2>
          <p>
            We put every discipline on the same team and the same model from day one. The pieces
            stop competing and start fitting together.
          </p>
        </div>

        <div className="h-shift-board">
          {HOME.fragments.map((f, i) => (
            <div
              key={f.label}
              className="h-tile"
              style={{ "--x": `${f.x}px`, "--y": `${f.y}px`, "--r": `${f.r}deg` }}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {f.label}
            </div>
          ))}
          <div className="h-shift-core">One team · one model · one plan</div>
        </div>
      </div>
    </section>
  );
}

// ---------- 5. how it works: sticky image, scrolling steps ----------

function Steps() {
  const [active, setActive] = useState(0);
  const list = useRef(null);

  useEffect(() => {
    const items = list.current.querySelectorAll("li");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.i))),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    items.forEach((li) => obs.observe(li));
    return () => obs.disconnect();
  }, []);

  const steps = HOME.steps;
  return (
    <section className="sec h-steps">
      <SectionHead kicker="How it works" title="Four moves from question to delivery" />
      <div className="h-steps-grid">
        <div className="h-steps-media" aria-hidden="true">
          <div className="h-steps-frame">
            {steps.map((s, i) => (
              <img key={s.no} src={s.img} alt="" loading="lazy" decoding="async" className={i === active ? "on" : ""} />
            ))}
            <span className="h-steps-count">
              {steps[active].no} <i>/ {String(steps.length).padStart(2, "0")}</i>
            </span>
          </div>
          <div className="h-steps-rail">
            <i style={{ transform: `scaleX(${(active + 1) / steps.length})` }} />
          </div>
        </div>

        <ol className="h-steps-list" ref={list}>
          {steps.map((s, i) => (
            <li key={s.no} data-i={i} className={i === active ? "on" : ""}>
              <img src={s.img} alt="" loading="lazy" decoding="async" className="h-steps-inline" />
              <span className="h-steps-no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ---------- 6. capabilities ----------

function DiscCard({ no, title, short, img }) {
  const ref = useRef(null);
  useTilt(ref, 4);
  return (
    <Link to="expertise" className="h-dcard-link">
      <div className="h-dcard" ref={ref}>
        <img src={img.replace("w=1600", "w=700")} alt="" loading="lazy" decoding="async" className="h-dcard-img" />
        <span className="h-dcard-no">{no}</span>
        <strong>{title}</strong>
        <p>{short}</p>
        <ArrowUpRight className="h-dcard-go" size={20} />
      </div>
    </Link>
  );
}

function Capabilities() {
  return (
    <section className="sec dark h-caps">
      <SectionHead
        kicker="Capabilities"
        title="One practice. Eight disciplines."
        link="expertise"
        linkLabel="Explore expertise"
      />
      <div className="h-caps-grid">
        {EXPERTISE.map((e, i) => (
          <Reveal key={e.slug} delay={(i % 4) * 80}>
            <DiscCard {...e} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---------- 7. product ----------

function Product() {
  return (
    <section className="sec h-product">
      <div className="h-product-grid">
        <Reveal className="h-product-copy">
          <span className="eyebrow">Product · CoArchitive Atlas</span>
          <h2>
            See the whole place <em>before you build it.</em>
          </h2>
          <p>
            Atlas is the spatial platform behind our planning work. Land, movement, water and
            growth sit in one live model that your own team keeps using after handover.
          </p>
          <ul>
            <li>Layer any dataset on one shared map</li>
            <li>Test growth scenarios years ahead</li>
            <li>Share the same view with every department</li>
          </ul>
          <Link to="contact" className="text-link">
            Request a demo <ArrowRight size={16} />
          </Link>
        </Reveal>
        <Reveal variant="scale" delay={120}>
          <AtlasDemo />
          <p className="h-product-hint">Try it: switch layers on and off, then drag the scenario.</p>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- 8. work: pinned horizontal scroll on desktop ----------

function Work() {
  const sec = useRef(null);
  const track = useRef(null);
  const dist = useRef(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    const update = () => setPinned(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // measure only on resize; the scroll handler just reads the cached distance
  useEffect(() => {
    const s = sec.current;
    const t = track.current;
    if (!pinned) {
      s.style.height = "";
      t.style.transform = "";
      return;
    }
    const measure = () => {
      dist.current = Math.max(0, t.scrollWidth - window.innerWidth);
      s.style.height = `${window.innerHeight + dist.current}px`;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(t);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  useScrollFrame(() => {
    if (!pinned) return;
    const r = sec.current.getBoundingClientRect();
    const span = Math.max(1, r.height - window.innerHeight);
    const p = Math.min(1, Math.max(0, -r.top / span));
    track.current.style.transform = `translate3d(${-p * dist.current}px, 0, 0)`;
    sec.current.style.setProperty("--p", p.toFixed(4));
  });

  return (
    <section id="work" className={pinned ? "h-work pinned" : "h-work"} ref={sec}>
      <div className="h-work-stage">
        <div className="h-work-track" ref={track}>
          <div className="h-work-intro">
            <span className="eyebrow">Selected work</span>
            <h2>
              Work that <em>holds together.</em>
            </h2>
            <p>Six projects where planning, design and data were delivered as one.</p>
            <Link to="projects" className="text-link">
              All projects <ArrowRight size={16} />
            </Link>
          </div>

          {PROJECTS.map((p, i) => (
            <Link key={p.slug} to="projects" className="h-wcard">
              <div className="h-wcard-media">
                <img src={p.img.replace("w=1600", "w=1100")} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="h-wcard-meta">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{p.meta}</span>
              </div>
              <h3>{p.title}</h3>
            </Link>
          ))}

          <Link to="projects" className="h-work-end">
            <span>See every project</span>
            <ArrowUpRight size={40} />
          </Link>
        </div>
        <div className="h-work-progress" aria-hidden="true">
          <i />
        </div>
      </div>
    </section>
  );
}

// ---------- 9. results ----------

function Results() {
  return (
    <section className="sec h-results">
      <div className="h-results-head">
        <Reveal as="span" className="eyebrow">
          Results
        </Reveal>
        <Reveal as="h2" delay={80}>
          Measured in places <em>that work.</em>
        </Reveal>
      </div>
      <div className="h-results-grid">
        {HOME.results.map((r, i) => (
          <Reveal key={r.label} className="h-stat" delay={i * 90}>
            <b>
              <Counter to={r.to} decimals={r.decimals} suffix={r.suffix} />
            </b>
            <span>{r.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---------- 10. testimonials ----------

function Testimonials() {
  const [i, setI] = useState(0);
  const list = HOME.testimonials;
  const go = (d) => setI((i + d + list.length) % list.length);

  // every quote shares one grid cell, so the block is as tall as the longest
  // quote and nothing below jumps when they change
  return (
    <section className="sec grey h-quotes">
      <div className="h-quotes-inner">
        <span className="eyebrow">What clients say</span>
        <div className="h-quote-stack" aria-live="polite">
          {list.map((t, k) => (
            <figure key={k} className={k === i ? "h-quote on" : "h-quote"} aria-hidden={k !== i}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.org}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="h-quotes-nav">
          <span className="h-quotes-count">
            {String(i + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
          </span>
          <div className="h-quotes-dots" aria-hidden="true">
            {list.map((_, k) => (
              <i key={k} className={k === i ? "on" : ""} />
            ))}
          </div>
          <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)}>
            <ArrowLeft size={18} />
          </button>
          <button type="button" aria-label="Next testimonial" onClick={() => go(1)}>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ---------- 11. people ----------

function People() {
  return (
    <section className="sec h-team">
      <div className="h-team-head">
        <Reveal>
          <span className="eyebrow">The people</span>
          <h2>
            A small team, <em>deliberately multidisciplinary.</em>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p>
            Directors and specialists who work across disciplines, not beside them. The same
            people stay with a project from first brief to delivery.
          </p>
          <Link to="people" className="text-link">
            Meet the team <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
      <div className="h-team-row">
        {[...DIRECTORS, ...TEAM].map((p, i) => (
          <Reveal key={p.name} variant="clip" delay={i * 90} className="h-face">
            <div
              className="h-face-img"
              role="img"
              aria-label={p.name}
              style={{ backgroundImage: `url(${p.photo}), url(${p.fallback})` }}
            />
            <strong>{p.name}</strong>
            <span>{p.role}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ---------- 12. faq ----------

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec h-faq">
      <div className="h-faq-grid">
        <div className="h-faq-head">
          <span className="eyebrow">FAQ</span>
          <h2>Questions we hear first</h2>
          <p>
            Something else on your mind? Write to <span className="h-mail">{CONTACT.email}</span>
          </p>
        </div>
        <div className="h-faq-list">
          {HOME.faq.map(([q, a], i) => (
            <div key={q} className={open === i ? "h-q on" : "h-q"}>
              <button
                type="button"
                id={`faq-q${i}`}
                aria-expanded={open === i}
                aria-controls={`faq-a${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{q}</span>
                <Plus size={20} />
              </button>
              <div className="h-a" id={`faq-a${i}`} role="region" aria-labelledby={`faq-q${i}`}>
                <div>
                  <p>{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- 13. call to action ----------

function FinalCta() {
  const ref = useRef(null);
  useScrollProgress(ref);
  return (
    <section className="h-cta" ref={ref}>
      <Contours className="h-contours cta" count={9} cx={300} cy={640} base={90} step={52} seed={4.2} />
      <div className="h-cta-inner">
        <Reveal as="span" className="eyebrow">
          Start a project
        </Reveal>
        <Reveal as="h2" delay={80}>
          Let’s plan something <em>that lasts.</em>
        </Reveal>
        <Reveal className="h-cta-actions" delay={180}>
          <Magnetic>
            <Link to="contact" className="btn-lg light">
              Start a conversation <ArrowRight size={18} />
            </Link>
          </Magnetic>
          <span className="h-cta-mail">
            or write to <b>{CONTACT.email}</b>
          </span>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
<<<<<<< HEAD
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
=======
      <Hero />
      <Clients />
      <ScrollStatement id="problem" kicker="The problem" text={HOME.problem} />
      <Shift />
      <Steps />
      <Capabilities />
      <Product />
      <Work />
      <Results />
      <Testimonials />
      <People />
      <Faq />
      <FinalCta />
>>>>>>> Animation
    </>
  );
}
