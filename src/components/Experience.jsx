import React, { useEffect, useState } from "react";

const careerEvents = [
  {
    id: 1,
    date: "Aug 2024 – Present",
    title: "Full Stack Engineer",
    location: "Meyd.it • Sydney, Australia",
    color: "rgb(255,60,65)",
    icon: "💼",
  },
  {
    id: 2,
    date: "Oct 2020 – June 2023",
    title: "Full Stack Engineer",
    location: "Brainant’s Technology • Kathmandu, Nepal",
    color: "rgb(255,60,65)",
    icon: "💼",
  },
  {
    id: 3,
    date: "Jun 2020 – Sept 2020",
    title: "Web Developer ",
    location: "Cartmade Ecommerce • Kathmandu, Nepal",
    color: "rgb(255,60,65)",
    icon: "🛒",
  },
];

export default function ExperienceTimeline() {
  const displayEvents = careerEvents;

  return (
    <div className="timeline-wrapper">
      <div className="timeline-container">
        {displayEvents.map((ev, idx) => (
          <div
            key={ev.id}
            className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
          >
            <span style={{ background: ev.color }}>{ev.icon}</span>

            <div className="timeline-content">
              <span className="timeline-date">{ev.date}</span>
              <h4 style={{ color: ev.color }}>{ev.title}</h4>
              <p>{ev.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
