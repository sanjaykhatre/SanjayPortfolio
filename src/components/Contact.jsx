import React from "react";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">GET IN TOUCH</h2>
      <div className="contact-container">
        <div className="contact-left">
          <img src="/images/sanj.png" alt="Avatar" className="contact-avatar" />
          <h3>Let's Chat!</h3>
          <p>I’m available for part time, contract or full time positions</p>
          <div className="contact-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-subtext">
            Want to chat? I'm all ears and ready to connect! 👇
          </p>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Name *" required />
            <input type="email" name="email" placeholder="Email *" required />
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
            ></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
