import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/Home.css';

function Home() {
  return (
    <div className="modern-container">
      <Navigation />
      <main className="content">
        <section id="home" tabIndex="-1">
          <h1>Welcome to My Digital Space</h1>
          <p>Explore my projects, games, and more. Feel free to reach out securely.</p>
        </section>
        <section id="contact" tabIndex="-1">
          <h2>Contact</h2>
          <p>To contact me securely, please use the following PGP public key:</p>
          <pre className="pgp-key">
            -----BEGIN PGP PUBLIC KEY BLOCK-----

            mQINBGOKcGQBEAC7zS3ld+Xj5C6Kcr6+xmjUxHGF+5C5IvPqJzrRV0LSXXJm
            ... [Your full PGP public key here] ...
            -----END PGP PUBLIC KEY BLOCK-----
          </pre>
        </section>
      </main>
    </div>
  );
}

export default Home;
