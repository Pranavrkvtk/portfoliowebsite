import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const PHRASES = [
  "Java Backend Developer",
  "React & Next.js Engineer",
  "Microservices Architect",
  "Cloud & DevOps Enthusiast",
];

function useTypewriter(phrases) {
  const [text, setText] = useState("");
  const state = useRef({ pi: 0, ci: 0, deleting: false });

  useEffect(() => {
    let timeout;

    function tick() {
      const { pi, ci, deleting } = state.current;
      const phrase = phrases[pi];

      if (!deleting) {
        setText(phrase.slice(0, ci + 1));
        state.current.ci++;

        if (state.current.ci === phrase.length) {
          state.current.deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        setText(phrase.slice(0, ci - 1));
        state.current.ci--;

        if (state.current.ci === 0) {
          state.current.deleting = false;
          state.current.pi = (pi + 1) % phrases.length;
        }
      }

      timeout = setTimeout(tick, state.current.deleting ? 40 : 80);
    }

    timeout = setTimeout(tick, 80);
    return () => clearTimeout(timeout);
  }, [phrases]);

  return text;
}

function SkillBar({ label, pct, color }) {
  return (
    <div className="skill-item">
      <span className="skill-label">{label}</span>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

function Cube({ className }) {
  return (
    <div className={`cube ${className}`}>
      {["front", "back", "right-f", "left-f", "top-f", "bot-f"].map((f) => (
        <div key={f} className={`face ${f}`} />
      ))}
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(PHRASES);
  const cardRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setFlipped((f) => !f), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="bg-grid" />
      <div className="noise" />
      <div className="bg-split" />

      {/* LEFT */}
      <div className="left">
        <div className="badge">
          <div className="badge-dot" />
          <span>Available for work</span>
        </div>

        <h1>
          <span className="name-line">Hi, I'm</span>
          <span className="name-grad">Pranav R K</span>
        </h1>

        <div className="terminal">
          <div className="t-bar">
            <div className="t-dot" style={{ background: "#ff5f57" }} />
            <div className="t-dot" style={{ background: "#febc2e" }} />
            <div className="t-dot" style={{ background: "#28c840" }} />
          </div>
          <div className="t-line">~ portfolio $</div>
          <div>
            <span className="t-prompt">▶ </span>
            <span className="t-text">{typed}</span>
            <span className="t-cursor" />
          </div>
        </div>

        <p className="desc">
          Building scalable microservices & modern web apps.
        </p>

        <div className="stats">
          {[
            { num: "2+", label: "YRS EXPERIENCE" },
            { num: "10+", label: "PROJECTS" },
            { num: "100%", label: "SATISFACTION" },
          ].map(({ num, label }) => (
            <div key={label} className="s-item">
              <span className="s-num">{num}</span>
              <span className="s-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="btns">
          <a href="#contact" className="btn-p">Hire me</a>
          <a href="#projects" className="btn-g">View projects</a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="scene3d">

          <div
            ref={cardRef}
            className={`card-3d ${flipped ? "is-flipped" : ""}`}
          >
            {/* FRONT */}
            <div className="card-face card-front">
              <div className="avatar-hex">
                {/* ✅ IMAGE FIXED HERE */}
                <img src="/img1.JPG" alt="Pranav" />
              </div>

              <div className="card-name">Pranav R K</div>
              <div className="card-role">
                JAVA · REACT · MICROSERVICES
              </div>
            </div>

            {/* BACK */}
            <div className="card-face card-back">
              <div style={{ fontSize: 14 }}>Skills</div>

              <SkillBar
                label="Java / Spring Boot"
                pct={92}
                color="linear-gradient(90deg,#6366f1,#8b5cf6)"
              />
              <SkillBar
                label="React"
                pct={85}
                color="linear-gradient(90deg,#06b6d4,#3b82f6)"
              />
              <SkillBar
                label="AWS"
                pct={78}
                color="linear-gradient(90deg,#ec4899,#f59e0b)"
              />
            </div>
          </div>

          <Cube className="cube-a" />
          <Cube className="cube-b" />
          <Cube className="cube-c" />
        </div>
      </div>
    </section>
  );
}