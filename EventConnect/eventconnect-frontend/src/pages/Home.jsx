// src/pages/Home.jsx
import { Link } from "react-router-dom";
import "../Styles/styles.css"; // Ensure global styles are loaded

export default function Home() {
  return (
    <>
      {/* Full-page background image (Handled by CSS, but keeping div if needed for specific overrides) */}
      <div className="page-bg" style={{ backgroundImage: 'url("/images/event-bg.jpg")' }} />
      <div className="page-bg-overlay" />

      {/* Hero content */}
      <main className="hero-container">
        <div className="hero-glass">
          
          {/* Main Text */}
          <div className="hero-content">
            <span className="badge-pill">🚀 The #1 Platform for Communities</span><br></br>
            <h1>Connect. Organize. <br /> <span className="text-gradient">Experience.</span></h1>
            <p>
              EventConnect is the easiest way to discover local workshops, meetups, 
              and festivals. Join a community of creators and explorers in Chicago and Greater Chicago areas.
            </p>

            <div className="hero-actions">
              <Link to="/register" className="hero-btn primary">
                Get Started
              </Link>
              <Link to="/login" className="hero-btn secondary">
                Sign In
              </Link>
              <Link to="/about" className="hero-btn secondary">
               About Us
              </Link>
            </div>
          </div>

          {/* Features Grid (New Addition for Pro Look) */}
          <div className="hero-features">
            <div className="feature-item">
              <div className="f-icon">📅</div>
              <h3>Discover</h3>
              <p>Find events near you</p>
            </div>
            <div className="feature-item">
              <div className="f-icon">✨</div>
              <h3>Create</h3>
              <p>Host your own meetups</p>
            </div>
            <div className="feature-item">
              <div className="f-icon">🤝</div>
              <h3>Connect</h3>
              <p>Meet like-minded people</p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}