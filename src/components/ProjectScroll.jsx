import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Meyd.it",
    description: "Custom clothing web platform for modern tailoring.",
    image: "../assets/meydit.jpeg",
    tech: ["Next.js", "Node.js", "postgreSQL"],
    link: "https://meyd.it",
  },
  {
    title: "HTML Editor",
    description: "Browser-based HTML playground with 50k+ users.",
    image: "../assets/programiz.png",
    tech: ["Next.js", "Material-UI"],
    link: "https://www.programiz.com/html/online-compiler/",
  },
  {
    title: "SQL Compiler",
    description: "Browser-based SQL playground with 50k+ users.",
    image: "../assets/programiz.png",
    tech: ["Next.js", "Material-UI"],
    link: "https://www.programiz.com/sql/online-compiler/",
  },
  {
    title: "Cura Health",
    description: "Telehealth admin dashboard built for Nepal's healthcare.",
    image: "../assets/curaHealth.png",
    tech: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Meilisearch",
    ],
    link: "https://play.google.com/store/apps/details?id=com.curahealth",
  },
  {
    title: "Sewa360",
    description: "SaaS for HR and audit management.",
    image: "../assets/sewa360.png",
    tech: ["React", "Firebase"],
    link: "https://app.sewa360.com/",
  },
];

const ProjectScrollPage = () => {
  return (
    <section className="project-section">
      <h2 className="project-heading"> Projects</h2>
      <div className="project-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectScrollPage;
