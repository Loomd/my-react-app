import React, { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="modern-container">
      <header>
        <button className="menu-toggle" onClick={toggleMenu} aria-expanded={menuOpen} aria-controls="main-nav">
          <span className="sr-only">Toggle menu</span>
          <span className="hamburger"></span>
        </button>
        <nav id="main-nav" className={`nav-bar ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <section id="home" tabIndex="-1">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a developer passionate about creating elegant solutions.</p>
        </section>
        <section id="about" tabIndex="-1">
          <h2>About Me</h2>
          <p>I specialize in full-stack development with a focus on modern web technologies.</p>
        </section>
        <section id="projects" tabIndex="-1">
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
        <section id="contact" tabIndex="-1">
          <h2>Contact</h2>
          <ul>
            <li>Email: <a href="mailto:example@email.com">example@email.com</a></li>
            <li>GitHub: <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">github.com/example</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">linkedin.com/in/example</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Home;

