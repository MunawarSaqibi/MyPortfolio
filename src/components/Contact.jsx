
import React from "react";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <p className="section-title">GET IN TOUCH</p>

      <h2 className="contact-heading">Contact Me</h2>

      <p className="contact-description">
        Have a project, internship opportunity, or just want to connect? Feel
        free to reach out. I'll get back to you as soon as possible.
      </p>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <div className="info-card">
            <div className="info-icon">📧</div>

            <div>
              <h3>Email</h3>
              <p>munawar@example.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📱</div>

            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📍</div>

            <div>
              <h3>Location</h3>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}

        <form
          className="contact-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <input type="text" placeholder="Subject" required />

          <textarea rows="6" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;