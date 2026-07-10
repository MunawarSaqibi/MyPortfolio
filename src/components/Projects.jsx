import React from "react";
import { Foodweb } from "../utils/constants";
import { Pharmacyweb } from "../utils/constants";
import { ImageGallery } from "../utils/constants";

const projects = [
  {
    title: "Food Delivery Web App",
    description:
      "A responsive food ordering application with restaurant listings, search, filtering, and modern UI built using React.",
    tech: "React • JavaScript • CSS",
    image: Foodweb,
    github: "#",
    live: "#",
  },
  {
    title: "Pharmacy Inventory System",
    description:
      "Inventory management system for pharmacies with medicine tracking, expiry alerts, billing, and stock management.",
    tech: "HTML • CSS • JavaScript",
    image: Pharmacyweb,
    github: "#",
    live: "#",
  },
  {
    title: "PhotoHub",
    description:
      "An Organize Image Gallery website, beautifully structured",
    tech: "React • CSS",
    image: ImageGallery,
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <p className="section-title">MY WORK</p>

      <h2 className="projects-heading">Recent Projects</h2>

      <p className="projects-description">
        Some of the projects I've built to improve my development skills and
        solve real-world problems.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">
                <a href={project.github}>GitHub</a>
                <a href={project.live}>Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;