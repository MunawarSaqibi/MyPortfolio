import React from "react";
import { ProfileImg } from "../utils/constants";

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-image-section">
        <div className="about-image-card">
          <img
            src={ProfileImg}
            alt="Mohd Munawar"
            className="about-image"
          />
        </div>
      </div>

      <div className="about-content">
        <p className="section-tag">ABOUT ME</p>

        <h2 className="about-heading">
          Passionate IT Engineer & Web Developer
        </h2>

        <p className="about-text">
          I'm an Information Technology Engineering student with a passion for
          building modern, responsive, and user-friendly web applications. I
          enjoy solving real-world problems through technology and continuously
          improving my programming and development skills.
        </p>

        <p className="about-text">
          My interests include Frontend Development, React.js, JavaScript,
          Python, UI/UX Design, and Full Stack Development. I love learning new
          technologies and creating projects that make an impact.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>B.E. Information Technology Student</p>
          </div>

          <div className="about-card">
            <h3>💻 Experience</h3>
            <p>Frontend & React Developer</p>
          </div>

          <div className="about-card">
            <h3>🚀 Goal</h3>
            <p>Become a Full Stack Software Engineer</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;