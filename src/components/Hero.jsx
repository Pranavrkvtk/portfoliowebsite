// Hero.jsx
import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const PHRASES = [
  "I am a Fullstack Developer",
  "Java Backend Developer",
  "React & Next.js Engineer",
  "Microservices Architect",
];

const TECH_MARQUEE = [
  "Java", "Spring Boot", "React", "Next.js", "Node.js",
  "TypeScript", "AWS", "Docker", "Kubernetes", "PostgreSQL",
  "Redis", "Kafka", "GraphQL", "Tailwind", "Microservices",
];

const FLOATING_PILLS = [
  { label: "☕ Java",       cls: "p-a" },
  { label: "⚛ React",      cls: "p-b" },
  { label: "🍃 Spring",    cls: "p-c" },
  { label: "☁ AWS",        cls: "p-d" },
  { label: "🐳 Docker",    cls: "p-e" },
  { label: "▲ Next.js",    cls: "p-f" },
];

/* ── Typewriter hook ─────────────────────────────────────── */
function useTypewriter(phrases) {
  const [text, setText] = useState("");
  const state = useRef({ pi: 0, ci: 0, deleting: false });

  useEffect(() => {
    const type = () => {
      const current = phrases[state.current.pi];
      const { ci, deleting } = state.current;

      if (!deleting) {
        const newText = current.slice(0, ci + 1);
        setText(newText);
        state.current.ci++;

        if (newText === current) {
          state.current.deleting = true;
          setTimeout(type, 2200);
          return;
        }
      } else {
        const newText = current.slice(0, ci - 1);
        setText(newText);
        state.current.ci--;

        if (newText === "") {
          state.current.deleting = false;
          state.current.pi = (state.current.pi + 1) % phrases.length;
        }
      }
      setTimeout(type, deleting ? 45 : 75);
    };
    const id = setTimeout(type, 400);
    return () => clearTimeout(id);
  }, [phrases]);

  return text;
}

/* ── Count-up stat ───────────────────────────────────────── */
function Stat({ value, suffix, label }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const dur = 1400;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(value * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div className="stat" ref={ref}>
      <span className="stat-num">
        {n}
        <span className="stat-suffix">{suffix}</span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ── Skill bar ───────────────────────────────────────────── */
function SkillBar({ label, pct, hue }) {
  return (
    <div className="skill">
      <div className="skill-head">
        <span className="skill-label">{label}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            "--pct": `${pct}%`,
            background: `linear-gradient(90deg, hsl(${hue} 90% 60%), hsl(${hue + 40} 90% 65%))`,
          }}
        />
      </div>
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  const typed = useTypewriter(PHRASES);
  const cardRef = useRef(null);
  const heroRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  /* Mouse spotlight */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${e.clientX - r.left}px`);
      hero.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  /* Auto-flip */
  useEffect(() => {
    const id = setInterval(() => setFlipped((f) => !f), 7000);
    return () => clearInterval(id);
  }, []);

  /* Card tilt on mouse */
  const onCardMove = (e) => {
    const el = cardRef.current;
    if (!el || flipped) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${-y * 18}deg`);
    el.style.setProperty("--ry", `${x * 22}deg`);
  };
  const onCardLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "8deg");
    el.style.setProperty("--ry", "-14deg");
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* ── Background layers ───────────────────────── */}
      <div className="bg-grid" />
      <div className="bg-aurora">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>
      <div className="bg-spotlight" />
      <div className="bg-scanlines" />
      <div className="bg-noise" />

      {/* ── Left column ─────────────────────────────── */}
      <div className="left">
        <div className="badge">
          <span className="badge-dot" />
          <span>Available for work</span>
        </div>

        <h1 className="headline">
          <span className="hi">Hi, I'm</span>
          <span className="name">Pranav R K</span>
          <span className="name-shadow" aria-hidden="true">Pranav R K</span>
        </h1>

        <div className="terminal">
          <div className="term-bar">
            <span className="tdot td-red" />
            <span className="tdot td-yellow" />
            <span className="tdot td-green" />
            <span className="term-title">~/portfolio — zsh</span>
          </div>
          <div className="term-body">
            <div className="term-line">
              <span className="term-user">pranav</span>
              <span className="term-at">@</span>
              <span className="term-host">dev</span>
              <span className="term-path">:~$</span>
              <span className="term-cmd"> whoami</span>
            </div>
            <div className="term-out">
              <span className="term-arrow">▸</span>
              <span className="term-text">{typed}</span>
              <span className="term-cursor" />
            </div>
          </div>
        </div>

        <p className="desc">
          Building scalable microservices & modern web apps with
          <span className="desc-hl"> clean architecture</span> and
          <span className="desc-hl"> pixel-perfect UI</span>.
        </p>

        <div className="stats">
          <Stat value={2}  suffix="+"   label="YRS EXPERIENCE" />
          <Stat value={10} suffix="+"   label="PROJECTS" />
          <Stat value={100} suffix="%"  label="SATISFACTION" />
        </div>

        <div className="btns">
          <a href="#contact" className="btn btn-primary">
            <span className="btn-inner">Hire me</span>
            <span className="btn-glow" />
          </a>
          <a href="#projects" className="btn btn-ghost">
            <span className="btn-inner">View projects</span>
          </a>
          <a href="/doc1.pdf" download className="btn btn-outline">
            <span className="btn-inner">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Resume
            </span>
          </a>
        </div>
      </div>

      {/* ── Right column ────────────────────────────── */}
      <div className="right">
        <div className="scene">
          {/* Orbit rings */}
          <div className="ring ring-1"><span className="ring-dot" /></div>
          <div className="ring ring-2"><span className="ring-dot ring-dot-2" /></div>
          <div className="ring ring-3" />

          {/* Core glow */}
          <div className="core-glow" />

          {/* ID card */}
          <div
            ref={cardRef}
            className={`id-card ${flipped ? "is-flipped" : ""}`}
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
            onClick={() => setFlipped((f) => !f)}
          >
            <div className="id-face id-front">
              <div className="shine" />
              <div className="id-photo">
                <img src="https://via.placeholder.com/120?text=PR" alt="Pranav" />
                <span className="id-online" />
              </div>
              <div className="id-name">Pranav R K</div>
              <div className="id-role">Fullstack Engineer</div>
              <div className="id-meta">
                <span className="id-chip">☕ Java</span>
                <span className="id-chip">⚛ React</span>
              </div>
              <div className="id-hint">Click to flip</div>
            </div>

            <div className="id-face id-back">
              <div className="shine" />
              <div className="id-back-title">// Tech Stack</div>
              <SkillBar label="Java / Spring Boot" pct={92} hue={255} />
              <SkillBar label="React / Next.js"   pct={88} hue={190} />
              <SkillBar label="AWS / DevOps"      pct={78} hue={320} />
              <div className="id-hint">← Back</div>
            </div>
          </div>

          {/* Floating tech pills */}
          {FLOATING_PILLS.map((p) => (
            <span key={p.label} className={`pill ${p.cls}`}>
              {p.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Marquee ─────────────────────────────────── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((t, i) => (
            <span key={i} className="marquee-item">
              {t} <span className="marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll hint ─────────────────────────────── */}
      <div className="scroll-hint">
        <span>SCROLL</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}