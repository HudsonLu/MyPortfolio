import React from 'react';
import './modules/Logo.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['java', 'python', 'cs', 'cpp', 'javascript', 'typescript', 'html', 'css',], 
  },
  {
    title: 'Web Development',
    skills: ['react', 'nextjs', 'net', 'express', 'spring', 'postgres', 'mysql', 'firebase', 'mongodb', 'selenium', 'tailwind', 'materialui', 'bootstrap']
  },
  {
    title: 'Tools & Platforms',
    skills: ['pytorch', 'tensorflow', 'docker', 'linux', 'vscode','anaconda', 'git', 'github', 'androidstudio', 'figma', 'postman']
  }

];

function Logo() {
  return (
    <div className="logo">
      {skillCategories.map((category) => (
        <div key={category.title} className="skill-category">
          <h2>{category.title}</h2>
          <div className="skill-icons">
            {category.skills.map((skill) => (
              <div key={skill} className="skill-card">
                <img
                  src={`https://skillicons.dev/icons?i=${skill}&theme=light`}
                  alt={skill}
                  title={skill}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Logo;
