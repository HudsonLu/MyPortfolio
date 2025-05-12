import React from 'react';

function Home() {
  return (
    <div className="home-container">
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
    </div>
  );
}

export default Home;
