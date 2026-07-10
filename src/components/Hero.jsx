import React from "react";
import { HeroImage } from "../utils/constants";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-left">

        <p className="hero-greeting">Hi, I'm</p>

        <h1 className="hero-name">
          Mohd <span>Munawar</span>
        </h1>

        <h2 className="hero-title">
          Information Technology Engineer
        </h2>

        <p className="hero-description">
          Passionate IT engineering student focused on building responsive web
          applications, solving real-world problems, and continuously learning
          modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>
          <a href="#resume" className="secondary-btn">
            View Resume
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-card">
          <img
            src={HeroImage}
            alt="Profile"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;