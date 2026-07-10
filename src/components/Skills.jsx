
import React from "react";
import {
  HtmlIcon,
  cssIcon,
  JsIcon,
  ReactIcon,
  NodeIcon,
  PythonIcon,
  JavaIcon,
  SqlIcon,
} from "../utils/constants";

const skills = [
  { name: "HTML5", icon: HtmlIcon, level: "95%" },
  { name: "CSS3", icon: cssIcon, level: "90%" },
  { name: "JavaScript", icon: JsIcon, level: "85%" },
  { name: "React JS", icon: ReactIcon, level: "80%" },
  { name: "Node JS", icon: NodeIcon, level: "70%" },
  { name: "Python", icon: PythonIcon, level: "75%" },
  { name: "Java", icon: JavaIcon, level: "70%" },
  { name: "SQL", icon: SqlIcon, level: "80%" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <p className="section-title">MY SKILLS</p>

      <h2 className="skills-heading">Technical Skills</h2>

      <p className="skills-description">
        Here are the technologies and programming languages I use to build
        modern, responsive, and scalable web applications.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>

            <h3>{skill.name}</h3>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: skill.level }}
              ></div>
            </div>

            <span>{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;