import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav style={{ position: "fixed" }} className="navbar">
      <div className="navbar__logo">Sanjay.dev</div>

      <ul
        style={{ marginRight: "20px" }}
        className={`navbar__links ${open ? "open" : ""}`}
      >
        {["home", "about", "projects", "contact"].map((id) => (
          <li key={id} onClick={() => handleScroll(id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </li>
        ))}
        <li>
          <a
            style={{ textDecoration: "none" }}
            href="/resume.pdf"
            download
            className="resume-btn"
          >
            <span>Download Resume</span>
          </a>
        </li>
      </ul>

      <div className="navbar__toggle" onClick={() => setOpen(!open)}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </nav>
  );
};

export default Navbar;
