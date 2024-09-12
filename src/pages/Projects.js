import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <Navigation />
      <main>
        <h1>My Projects</h1>
        <section>
          <h2>About Me</h2>
          <p>I'm a developer passionate about creating elegant solutions. I specialize in full-stack development with a focus on modern web technologies.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1: A React-based task manager</h3>
              <p>Description of the project and its key features.</p>
            </li>
            <li>
              <h3>Project 2: An AI-powered chatbot</h3>
              <p>Description of the project and its key features.</p>
            </li>
            <li>
              <h3>Project 3: A blockchain explorer</h3>
              <p>Description of the project and its key features.</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Projects;
