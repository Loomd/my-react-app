import React from 'react';
import Navigation from '../components/common/Navigation';
import '../styles/pages/Projects.css';
import HyperText from '../components/ui/HyperText';

function Projects() {
  return (
    <div className="page-container">
      <Navigation />
      <div className="projects-content">
        <HyperText text="My Projects" />
        <main>
          <section id="about">
            <HyperText text="About Me" />
            <p>I'm a developer passionate about creating elegant solutions. I specialize in full-stack development with a focus on modern web technologies.</p>
          </section>
          <section id="projects">
            <HyperText text="Projects" />
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
    </div>
  );
}

export default Projects;