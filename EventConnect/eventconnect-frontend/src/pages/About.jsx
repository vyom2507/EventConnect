// src/pages/About.jsx
import "../Styles/styles.css";

export default function About() {
  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="about-wrapper">
        
        {/* Section 1: The Story (Mission) */}
        <div className="about-glass-card">
          <h1 className="about-title">Our Mission</h1>
          <p className="about-lead">
            EventConnect was built with a simple goal: <strong>to bring people together.</strong>
          </p>
          <p className="about-text">
            In a world that is increasingly digital, we often forget the power of face-to-face connection. 
            Whether it's a tech meetup, a cultural festival, or a simple neighborhood potluck, 
            events are the heartbeat of a community.
          </p>
          <p className="about-text">
            We provide the platform. You provide the energy. Together, we build communities that last.
          </p>
        </div>

        {/* Section 2: Community Guidelines */}
        <div className="about-glass-card">
          <h2 className="about-subtitle">Community Guidelines</h2>
          <p className="about-text">To ensure EventConnect remains a safe space for everyone, we ask all members to follow these rules:</p>
          
          <ul className="guidelines-list">
            <li>
              <strong>🤝 Be Respectful</strong>
              <span>Treat all members with kindness. Harassment or hate speech will result in an immediate ban.</span>
            </li>
            <li>
              <strong>🛡️ Safety First</strong>
              <span>Verify event details before attending. Meet in public spaces and trust your instincts.</span>
            </li>
            <li>
              <strong>🚫 No Spam</strong>
              <span>Do not use this platform for unsolicited advertising or scams. Keep it relevant.</span>
            </li>
            <li>
              <strong>🎉 Have Fun</strong>
              <span>Engage, participate, and make new friends! That's what we are here for.</span>
            </li>
          </ul>
        </div>

        {/* Section 3: The Team (You!) */}
        <div className="about-glass-card center-text">
          <h2 className="about-subtitle">Built By</h2>
          
          <div className="dev-profile">
            <div className="dev-avatar">V</div>
            <div>
              <h3>Vyom Limbachiya</h3>
              <p>Developer & Designer</p>
            </div>
          </div>

          {/* --- NEW: SOCIAL LINKS SECTION --- */}
          <h3>Questions? Reach out us on</h3>
          <div className="dev-socials">
            {/* Instagram */}
            <a href="https://instagram.com/vyom.net25" target="_blank" rel="noopener noreferrer" className="social-icon insta">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>

             {/* LinkedIn */}
             <a href="https://www.linkedin.com/in/vyom-limbachiya-582a85277/" target="_blank" rel="noopener noreferrer" className="social-icon linked">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>

            {/* Twitter / X */}
            <a href="https://twitter.com/krishx25" target="_blank" rel="noopener noreferrer" className="social-icon twit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon fb">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>

             {/* Email */}
             <a href="mailto:vyomlimbachiya03@email.com" className="social-icon mail">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
          {/* ---------------------------------- */}

          <p className="about-footer-text">
            Designed as a Final Semester Project using React.js, Context API, and Modern CSS.
          </p>
        </div>

      </div>
    </>
  );
}