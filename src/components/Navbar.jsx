import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      {/* LOGO */}
      <div className="brand">



       <div className="brand__text">
        </div>
      </div>

      {/* HAMBURGER */}
      <button
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAV */}
      <nav className={`nav ${open ? "active" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        {/* CTA */}
   
      </nav>

      {/* DESKTOP CTA */}
      <div className="header-cta">
      </div>

    </header>
  );
}