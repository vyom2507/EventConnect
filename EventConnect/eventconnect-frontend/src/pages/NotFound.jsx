// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom";
import "../Styles/styles.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="not-found-wrapper">
        <div className="glass-error-card">
          <h1 className="error-code">404</h1>
          <h2>Oops! You seem lost.</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          
          <div className="error-actions">
            <button className="primary-btn" onClick={() => navigate("/")}>
              Go Home
            </button>
            <button className="secondary-btn" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}