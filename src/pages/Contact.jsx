import React from 'react';
import './modules/contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me via email or connect on social media.</p>

      <div className="contact-details">
        <p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
            alt="Email"
            className="icon"
          />
          Email: <a href="mailto:lueric@live.ca">lueric@live.ca</a>
        </p>
        <p>
          <img
            src="https://skillicons.dev/icons?i=linkedin"
            alt="LinkedIn"
            className="icon"
          />
          LinkedIn: <a href="https://linkedin.com/in/hudson-lu-2802022a8" target="_blank" rel="noopener noreferrer">/hudson-lu-2802022a8</a>
        </p>
        <p>
          <img
            src="https://skillicons.dev/icons?i=github"
            alt="GitHub"
            className="icon"
          />
          GitHub: <a href="https://github.com/HudsonLu" target="_blank" rel="noopener noreferrer">HudsonLu</a>
        </p>
      </div>

      
    </div>
  );
}

export default Contact;
