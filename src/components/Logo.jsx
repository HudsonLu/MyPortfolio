import React from 'react';
import './modules/Logo.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['java', 'javascript', 'typescript', 'python']
  },
  {
    title: 'Frontend Development',
    skills: ['react', 'nextjs', 'svelte']
  },
  {
    title: 'Backend & Databases',
    skills: ['postgres', 'supabase']
  },
  {
    title: 'Tools & Platforms',
    skills: ['docker', 'linux']
  }
];

function Logo() {
  return (
    <div className="logo">
      {skillCategories.map((category) => (
        <div key={category.title}>
          <h2>{category.title}</h2>
          <div className="skill-icons">
            {category.skills.map((skill) => (
              <img
                key={skill}
                src={`https://skillicons.dev/icons?i=${skill}&theme=light`}
                alt={skill}
                title={skill}
                className="skill-icon"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Logo;
