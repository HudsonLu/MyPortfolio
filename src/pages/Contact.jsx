import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me via email or connect on social media.</p>

      <div className="contact-details">
        <p>Email: <a href="mailto:yourname@example.com">yourname@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
      </div>

      <div className="contact-links">
        <h3>Connect with me:</h3>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

export default Contact;
