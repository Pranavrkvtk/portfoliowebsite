import React, { useState, useRef } from "react";
import "./Contact.css";

function Contact() {
  const [hoveredCard, setHoveredCard] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // 3D tilt effect for the whole section
  const handleSectionMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 5;
    const rotateX = ((centerY - y) / centerY) * 3;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleSectionMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  // Card 3D effect on mouse move
  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  // Copy email to clipboard
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    alert(`${type} copied to clipboard!`);
  };

  return (
    <section 
      className="contact-section" 
      id="contact"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.1s ease-out"
      }}
    >
      {/* Animated Background Elements */}
      <div className="contact-bg">
        <div className="contact-gradient"></div>
        <div className="contact-grid"></div>
      </div>

      {/* Floating Particles */}
      <div className="contact-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="contact-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${5 + Math.random() * 7}s`,
            width: `${2 + Math.random() * 5}px`,
            height: `${2 + Math.random() * 5}px`,
          }}></div>
        ))}
      </div>

      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-badge">
            <i className="fas fa-paper-plane"></i>
            <span>Get In Touch</span>
          </div>
          <h2 className="contact-title">
            Let's<span> Connect</span>
          </h2>
          <div className="contact-divider">
            <span></span>
            <i className="fas fa-envelope"></i>
            <span></span>
          </div>
          <p className="contact-subtitle">
            Have a project in mind? I'd love to hear from you!
          </p>
        </div>

        {/* Main Contact Card */}
        <div 
          ref={cardRef}
          className={`contact-card ${hoveredCard ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredCard(true)}
          onMouseLeave={() => setHoveredCard(false)}
          onMouseMove={handleCardMouseMove}
        >
          {/* Glow effect that follows cursor */}
          <div 
            className="card-glow" 
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15), transparent 70%)`
            }}
          ></div>

          {/* Decorative rings */}
          <div className="card-ring"></div>
          <div className="card-ring card-ring--2"></div>

          {/* Contact Icon */}
          <div className="contact-icon-wrapper">
            <div className="contact-icon-pulse"></div>
            <div className="contact-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            {/* Email Section */}
            <div className="contact-item email-item">
              <div className="contact-item-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-item-content">
                <span className="contact-label">Email Address</span>
                <div className="contact-value-wrapper">
                  <a href="mailto:pranavrkofficial@gmail.com" className="contact-value">
                    pranavrkofficial@gmail.com
                  </a>
                  <button 
                    className="copy-btn"
                    onClick={() => copyToClipboard('pranavrkofficial@gmail.com', 'Email')}
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="contact-item phone-item">
              <div className="contact-item-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="contact-item-content">
                <span className="contact-label">Phone Number</span>
                <div className="contact-value-wrapper">
                  <a href="tel:+918547638700" className="contact-value">
                    +91-85476-38700
                  </a>
                  <button 
                    className="copy-btn"
                    onClick={() => copyToClipboard('+918547638700', 'Phone number')}
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="contact-item location-item">
              <div className="contact-item-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-item-content">
                <span className="contact-label">Location</span>
                <span className="contact-value">India</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="contact-buttons">
            <a href="mailto:pranavrkofficial@gmail.com" className="contact-btn primary-btn">
              <i className="fas fa-paper-plane"></i>
              <span>Send Email</span>
            </a>
            <a href="https://github.com/Pranavrkvtk" target="_blank" rel="noopener noreferrer" className="contact-btn github-btn">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/pranav-rk" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin-btn">
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Availability Status */}
          <div className="availability-status">
            <div className="status-dot"></div>
            <span>Available for freelance work</span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="contact-note">
          <i className="fas fa-reply-all"></i>
          <p>I typically respond within 24 hours</p>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="contact-orb orb-1"></div>
      <div className="contact-orb orb-2"></div>
      <div className="contact-orb orb-3"></div>
    </section>
  );
}

export default Contact;