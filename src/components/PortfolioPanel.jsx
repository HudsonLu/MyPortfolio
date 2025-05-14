import React, { useState } from 'react';
import './modules/PortfolioPanel.css';

const contentData = {
  experience: {
    title: 'Software Engineer',
    subtitle: '🏢 Google · 2022 - Present',
    description: `Built Android apps, led performance optimizations, and launched global features. Specialized in Kotlin and Jetpack Compose.`,
    quote: `"Move fast, but don’t break things. Quality matters."`
  },
  education: {
    title: 'Bachelor of Software Engineering',
    subtitle: '🎓 Concordia University · 2019 - 2023',
    description: `Focused on software systems, OOP, data structures, and full-stack development.`,
    quote: `"Learning never exhausts the mind."`
  },
  projects: {
    title: 'Campus Navigator App',
    subtitle: '📱 React Native · 2024',
    description: `Developed a cross-campus navigation app for Concordia. Features include Google Maps API, building info, and shuttle integration.`,
    quote: `"Navigation made smart and simple."`
  }
};

function PortfolioPanel() {
  const [selected, setSelected] = useState('experience');
  const data = contentData[selected];

  return (
    <div className="panel-container">
      <aside className="gradient-sidebar">
        <ul>
          {Object.keys(contentData).map((key) => (
            <li
              key={key}
              className={selected === key ? 'active' : ''}
              onClick={() => setSelected(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </li>
          ))}
        </ul>
      </aside>

      <main className="panel-content slide-in">
        <h1>{data.title}</h1>
        <h3>{data.subtitle}</h3>
        <p>{data.description}</p>
        <blockquote>{data.quote}</blockquote>
      </main>
    </div>
  );
}

export default PortfolioPanel;
