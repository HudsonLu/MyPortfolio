// WorkExperienceCard.jsx
import React from 'react';
import './modules/WorkExperienceCard.css';

function WorkExperienceCard() {
  return (
    <div className="experience-container">
      <aside className="sidebar">
        <ul>
          <li className="active">Work Experience</li>
          <li>Education</li>
          <li>Projects</li>
          <li>Skills</li>
        </ul>
      </aside>

      <main className="profile">
        <h1 className="title">Software Engineer</h1>
        <div className="meta">
          <span className="location">🏢 Google</span>
          <span className="duration">📅 2022 - Present</span>
        </div>

        <div className="description">
          <p>
            A key contributor in the Android team, leading performance optimization for flagship apps.
            Built scalable architecture patterns, mentored interns, and helped launch several global features.
          </p>
          <p>
            Specialized in Kotlin, Jetpack Compose, and CI/CD pipelines with Bazel.
          </p>
        </div>

        <blockquote className="quote">
          "Move fast, but don’t break things. Quality matters."
        </blockquote>
      </main>
    </div>
  );
}

export default WorkExperienceCard;
