import React from "react";
import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongo from "../assets/mongodb.png";
import git from "../assets/git.png";
import next from "../assets/next.png";
import firebase from "../assets/firebase.png";
import sql from "../assets/postgresql.png";
import aws from "../assets/aws.png";
import Experience from "./Experience";

const techIcons = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: js, name: "JavaScript" },
  { img: react, name: "React" },
  { img: next, name: "Next.js" },
  { img: node, name: "Node.js" },
  { img: express, name: "Express.js" },
  { img: mongo, name: "MongoDB" },
  { img: firebase, name: "Firebase" },
  { img: aws, name: "AWS" },
  { img: git, name: "Git" },
  { img: sql, name: "PostgreSQL" },
];

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "80px 40px",
        backgroundColor: "#000",
        color: "#fff",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <div style={{ flex: 1, minWidth: "320px" }}>
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ color: "#ff3c41", textAlign: "center", marginBottom: 30 }}
        >
          SKILLS
        </motion.h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "45px",
          }}
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
              style={{
                width: 100,
                height: 100,
                backgroundColor: "#111",
                border: "2px solid #ff3c41",
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 14,
              }}
            >
              <img
                src={tech.img}
                alt={tech.name}
                style={{ width: 40, height: 40, marginBottom: 6 }}
              />
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, minWidth: "320px" }}>
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ color: "#ff3c41", textAlign: "center", marginBottom: 30 }}
        >
          EXPERIENCE
        </motion.h2>
        <Experience />
      </div>
    </div>
  );
};

export default About;
