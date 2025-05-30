import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";
import sanj from "../assets/sanj.png";

const Contact = () => {
  const formRef = useRef();
  emailjs.init(process.env.USER_ID);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          alert("Thanks! Your message has been sent.");
          formRef.current.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Oops—something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">GET IN TOUCH</h2>
      <div
        className="contact-container"
        style={{ display: "flex", alignItems: "stretch" }}
      >
        <div
          className="contact-left"
          style={{
            justifyContent: "center",
            padding: "1rem",
            border: "1px solid #ff3c41",
          }}
        >
          <img
            src={sanj}
            alt="Avatar"
            className="contact-avatar"
            style={{ width: "100%", maxWidth: 300 }}
          />
          <h3>Let's Chat!</h3>
          <p>I’m available for part time, contract or full time positions</p>
          <div className="contact-icons">
            <a
              href="https://github.com/sanjaykhatre"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github  fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com/in/sanjay-khatri-8b9968180"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin  fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Right side (form) */}
        <div
          className="contact-right"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "1px solid #ff3c41",

            padding: "1rem",
          }}
        >
          <p className="contact-subtext">
            Want to chat? I'm all ears and ready to connect! 👇
          </p>
          <form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <input type="text" name="user_name" placeholder="Name *" required />
            <input
              type="email"
              name="user_email"
              placeholder="Email *"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              required
            />
            <textarea
              name="message"
              placeholder="Message *"
              rows="5"
              required
            />
            <br />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
