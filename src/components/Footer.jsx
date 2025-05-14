import React from 'react';
import './modules/headerFooter.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Hudson Lu</p>

      <p>Connect with me on:</p>

      <div className="social-icons">
        <a
          href="https://github.com/HudsonLu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://skillicons.dev/icons?i=github"
            alt="GitHub"
            title="GitHub"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/hudson-lu-2802022a8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://skillicons.dev/icons?i=linkedin"
            alt="LinkedIn"
            title="LinkedIn"
          />
        </a>

        <a href="mailto:lueric@live.ca" title="Email Me">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
            alt="Email"
            className="email-icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
