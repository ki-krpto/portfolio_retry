import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../assets/Logo.webp';
import Cert from '../assets/Cert.png';

export default function Home() {
  return (
    <>
      <div className="container circle-wrapper">
        <img src={Logo} alt="Logo" className="Hero-Logo circular-image" />
      </div>

      <div className="container">
        <div className="hero-text">
          <h1 className="hero-header">Hi, I'm Erik Shaver</h1>
          <p className="hero-subheader">Web Developer & Aspiring Pentester</p>

          <button
            className="btn btn-primary contact-button"
            onClick={() => {
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
          >
            Contact
          </button>

          <button className="btn btn-primary projects-button">Projects</button>
        </div>
      </div>

      <div className="projects-section">
        <h1 className="section-title">Projects</h1>

        <div className="projects-grid">
          <div className="project-card">
            <img src="/showcase1.png" alt="Project" className="project-image" />
            <h3 className="project-title">Exifuscator</h3>
            <p className="project-desc">
              Exifuscator is a tool that allows users to remove, and edit metadata from image files.
              It is written in python with PIL, and piexif. You can find it on my Github here!
            </p>
            <div className="project-links">
              <a href="https://github.com/fhs-codingclub/Exifuscator" className="glow-btn">
                See the Project!
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src="/showcase2.png" alt="Project" className="project-image" />
            <h3 className="project-title">Fallbrook HS Coding Club Website</h3>
            <p className="project-desc">
              The website for the Fallbrook High School Coding Club. It is a static website that is hosted on GitHub Pages.
            </p>
            <div className="project-links">
              <a href="https://fallbrookhs.tech" className="glow-btn">
                See the Project!
              </a>
            </div>
          </div>
        </div>
      </div>
        <div className="cert-section">
            <div className="container">
                <h1 className="section-title">Certifications</h1>
                <div className="cert-card">
                    <a href="https://certificates.cs50.io/71863d88-d0d4-4710-8038-9921967a7985.pdf?size=letter" target="_blank" rel="noopener noreferrer">
                    <img 
                    src={Cert}
                    alt="CS50 Certificate"
                    className="cert-image"
                    ></img>
                    </a>
                </div>
            </div>
        </div>
      <div className="contact-section" id="contact">
        <Container>
            <div className="terminal-wrapper">
                <pre className="contact-terminal">
                {`> contact initialized...
        > channels available:
                       - email:    shaver.eriks@gmail.com
                    - github:   github.com/ki-krpto
        `}
                <span className="cursor">█</span>
                </pre>
            </div>
        </Container>
      </div>
    </>
  );
}