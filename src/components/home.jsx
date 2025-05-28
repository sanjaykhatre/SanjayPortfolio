import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

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

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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
          Hello, I'm <span style={{ color: "#ff3c41" }}>Sanjay</span>.
        </h1>
        <h2>I'm a full stack web developer.</h2>
        <button
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
    </div>
  );
};

export default Home;
