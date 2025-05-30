import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectScrollPage from "./ProjectScroll";
import About from "./About";

const ScrollZoom = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 950);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const rawScale = useTransform(scrollYProgress, [0, 0.5], [1, 3]);
  const scale = isMobile ? 1 : rawScale;
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fullText =
    "I’m a software engineer with over three years of hands-on experience in application development, deeply committed to continuous learning and creating a team culture where everyone can grow and thrive. I’m also happy to relocate for the right opportunity and excited to take on challenges that push my skills forward.";
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let idx = 0;
    const type = () => {
      setDisplayedText(fullText.slice(0, idx + 1));
      idx++;
      if (idx < fullText.length) {
        setTimeout(type, 5); // adjust speed (ms) here
      }
    };
    // start typing a little after mount
    const starter = setTimeout(type, 300);
    return () => clearTimeout(starter);
  }, [fullText]);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <h2
        style={{
          color: "#ff3c41",
          fontSize: isMobile ? "1.5rem" : "2rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        About
      </h2>

      <motion.div
        style={{
          position: "sticky",
          top: "5%",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          height: "60vh",
          scale,
          opacity: imageOpacity,
        }}
      >
        <img
          src={"/images/sanj.png"}
          alt="Sanjay"
          style={{
            width: isMobile ? "150px" : "300px",
            height: isMobile ? "150px" : "300px",
            borderRadius: "50%",
            boxShadow: "0 4px 20px #ff3c41",
            objectFit: "cover",
          }}
        />

        <p
          style={{
            color: "#ff3c41",
            fontSize: "1.2rem",
            textAlign: "center",
            margin: 20,
            maxWidth: isMobile ? "90%" : 600,
            whiteSpace: "pre-wrap",
          }}
        >
          {displayedText}
          <span
            style={{
              display: "inline-block",
              width: "1ch",
              backgroundColor: "#ff3c41",
              marginLeft: 2,
              animation: "blink 1s step-end infinite",
            }}
          />
        </p>
      </motion.div>
      <About />

      {/* Projects section */}
      <div id="projects">
        <ProjectScrollPage />
      </div>

      {/* blinking cursor keyframes */}
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0 }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollZoom;
