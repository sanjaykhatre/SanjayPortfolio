import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const fullName = "Sanjay — ";
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let idx = 0;
    const typer = setInterval(() => {
      setDisplayedName(fullName.slice(0, idx + 1));
      idx += 1;
      if (idx === fullName.length) {
        clearInterval(typer);
      }
    }, 100);
    return () => clearInterval(typer);
  }, []);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff3c41,
        backgroundColor: 0x000000,
      });
      setVantaEffect(effect);
    }
    return () => vantaEffect && vantaEffect.destroy();
  }, [vantaEffect]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={vantaRef}
      style={{ height: "100vh", width: "100vw", color: "#fff" }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          top: "40%",
        }}
      >
        <h1>
          Hello, I&apos;m{" "}
          <span style={{ color: "#ff3c41", whiteSpace: "pre" }}>
            {displayedName}
            <span className="cursor" />
          </span>
        </h1>
        <h2>
          a Software Engineer passionate about building clean, efficient, and
          impactful
          <span style={{ color: "#ff3c41" }}> applications.</span>{" "}
        </h2>
        <button
          onClick={() => handleScroll("projects")}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            background: "transparent",
            border: "2px solid #ff3c41",
            color: "#ff3c41",
            cursor: "pointer",
          }}
        >
          View my work ↓
        </button>
      </div>

      <style>
        {`
          .cursor {
            display: inline-block;
            width: 1ch;
            background-color: #ff3c41;
            margin-left: 2px;
            animation: blink 1s steps(2, start) infinite;
          }
          @keyframes blink {
            to { visibility: hidden; }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
