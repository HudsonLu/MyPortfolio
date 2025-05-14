import React, { useState } from 'react';
import Profile from '../assets/Profile.png';
import Experience from '../components/Experience';
import Education from '../components/Education';
import './modules/Home.css';

function Home() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="home-container">
      <img
        src={Profile}
        alt="Profile"
        title="Profile"
        className="profile-img"
      />

      {/* Custom Gradient Toggle Bar */}
      <div className="gradient-toggle">
        {['profile', 'experience', 'education'].map((section) => (
          <div
            key={section}
            className={`toggle-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </div>
        ))}
      </div>

      {/* Conditional Rendering */}
      {activeSection === 'profile' && (
        <div className="intro">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I'm a passionate Software Engineering student specializing in web development using 
            React and modern frontend technologies. I love creating interactive and responsive web applications.
          </p>
          <p>
            Explore my projects and get to know more about me through the links below.
          </p>
          <div className="buttons">
            <a href="/about" className="btn">About Me</a>
            <a href="/projects" className="btn">My Projects</a>
            <a href="/contact" className="btn">Contact Me</a>
          </div>
        </div>
      )}

      {activeSection === 'experience' && <Experience />}
      {activeSection === 'education' && <Education />}
    </div>
  );
}

export default Home;
