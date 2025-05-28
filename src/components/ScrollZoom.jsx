import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "./About";

const ScrollZoom = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const aboutOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <div ref={ref} style={{ minHeight: "200vh", backgroundColor: "#000" }}>
      <motion.div
        style={{
          position: "sticky",
          top: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          scale,
          opacity,
          zIndex: 2,
        }}
      >
        <img
          src={"/images/sanj.png"}
          alt="Sanjay"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            color: "#fff",
            fontSize: "1.2rem",
            textAlign: "center",
            marginTop: 20,
            maxWidth: 600,
          }}
        >
          Fully committed to the philosophy of life-long learning, I’m a full
          stack developer with a deep passion for JavaScript, React and all
          things web development. The unique combination of creativity, logic,
          technology and never running out of new things to discover, drives my
          excitement and passion for web development. When I’m not at my
          computer I like to spend my time reading, keeping fit and playing
          guitar.
        </motion.p>
      </motion.div>

      <motion.div
        style={{
          opacity: aboutOpacity,
          paddingTop: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <About />
      </motion.div>
    </div>
  );
};

export default ScrollZoom;
