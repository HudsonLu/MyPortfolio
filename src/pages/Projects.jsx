import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Vite and React.',
    link: 'https://github.com/yourusername/portfolio-website',
  },
  {
    title: 'Campus Navigator',
    description: 'A mobile app for navigation across university campuses.',
    link: 'https://github.com/yourusername/campus-navigator',
  },
  {
    title: 'Health Tracker App',
    description: 'A React Native app to track medications and health data.',
    link: 'https://github.com/yourusername/health-tracker',
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
