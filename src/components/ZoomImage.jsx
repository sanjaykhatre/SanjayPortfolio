import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import myImage from "../assets/sanjay.jpg";

const ZoomImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
      }}
    >
      <motion.img
        src={myImage}
        alt="Sanjay"
        style={{ width: "300px", height: "auto", borderRadius: "50%", scale }}
      />
    </div>
  );
};

export default ZoomImage;
