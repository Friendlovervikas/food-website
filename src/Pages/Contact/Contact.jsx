import React from "react";
import "./Contact.css"; // Optional: Add styles for the Contact page

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-content">
        <p>
          We’d love to hear from you! Whether you have questions, feedback, or need support, 
          our team is here to assist you.
        </p>
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <h2>Other Ways to Reach Us</h2>
        <ul>
          <li>Email: abhiverma8941@gmail.com</li>
          <li>Phone: 8858368567</li>
          <li>Address: Noida Institute Of Engineering And Technology Gautam Buddh Nager</li>
        </ul>
      </section>
      <footer className="contact-footer">
        <p>Follow us on social media: @Abhishek</p>
      </footer>
    </div>
  );
};

export default Contact;
