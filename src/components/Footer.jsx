
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>Mohd Munawar</h2>
          <p>
            Information Technology Engineering Student passionate about
            building modern, responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>

          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="mailto:munawar@example.com">
              Email
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mohd Munawar. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;