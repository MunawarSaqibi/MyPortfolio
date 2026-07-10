
import React from "react";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <p className="section-title">MY RESUME</p>

      <h2 className="resume-heading">
        Education & Experience
      </h2>

      <p className="resume-description">
        A quick overview of my education, technical background, and resume.
      </p>

      <div className="resume-container">

        {/* Education */}

        <div className="resume-card">
          <div className="resume-icon">🎓</div>

          <h3>Education</h3>

          <div className="resume-item">
            <h4>B.E. Information Technology</h4>
            <span>2023 - Present</span>

            <p>
              Deccan College of Engineering & Technology
            </p>
          </div>

          <div className="resume-item">
            <h4>Intermediate (MPC)</h4>
            <span>2021 - 2023</span>

            <p>St. Mathews Junior College</p>
          </div>
        </div>

        {/* Experience */}

        <div className="resume-card">
          <div className="resume-icon">💼</div>

          <h3>Experience</h3>

          <div className="resume-item">
            <h4>Frontend Developer</h4>
            <span>React Projects</span>

            <p>
              Built responsive web applications using React,
              JavaScript, HTML and CSS.
            </p>
          </div>

          <div className="resume-item">
            <h4>Technical Skills</h4>

            <p>
              React • JavaScript • HTML • CSS • Python • Java • SQL
            </p>
          </div>
        </div>

      </div>

      <div className="resume-download">
        <a href="/resume.pdf" download>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;