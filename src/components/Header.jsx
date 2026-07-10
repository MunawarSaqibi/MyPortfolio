import React from "react";
import { MainIcon, ModeIcon } from "../utils/constants";

const Header = () => {
  return (
    <header className="header-container">
      <div>
        <img className="MainIcon" src={MainIcon} alt="Main Icon" />
        <div className="header-name">Mohd Munawar</div>
      </div>

      <nav className="nav-links" aria-label="Primary navigation">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="Mode-btn" aria-label="Toggle theme">
        <img className="ModeIcon" src={ModeIcon} alt="Mode Dark/Bright" />
      </button>
    </header>
  );
};

export default Header