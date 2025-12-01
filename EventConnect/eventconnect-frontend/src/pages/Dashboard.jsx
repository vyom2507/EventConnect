// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/styles.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [savedEvents, setSavedEvents] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [myEventsCount, setMyEventsCount] = useState(0);

  useEffect(() => {
    // 1. Load User Session
    const userSession = JSON.parse(localStorage.getItem("currentUser"));
    if (!userSession) {
      navigate("/login");
      return;
    }
    setCurrentUser(userSession);

    // 2. Load Events
    const events = JSON.parse(localStorage.getItem("events")) || [];
    setSavedEvents(events);

    // --- LOGIC UPGRADE: FILTER BY USER ---
    // Count only events where createdBy matches the logged-in user's email
    const myEvents = events.filter(event => event.createdBy === userSession.email);
    setMyEventsCount(myEvents.length);

  }, [navigate]);

  // Total events is everything in the DB + the 5 defaults
  const totalEvents = 5 + savedEvents.length; 
  
  // Show the most recent 3 events regardless of who created them (Community view)
  const upcoming = savedEvents.slice(0, 3);

  if (!currentUser) return null;

  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="dashboard-wrapper">
        
        {/* ===== HEADER ===== */}
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Dashboard</h1>
            <p className="dashboard-subtitle">Overview of your event network</p>
          </div>
          <div className="user-badge">
            <span>{currentUser.name}</span>
            <div className="avatar">
              {currentUser.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        {/* ===== STATS ROW ===== */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <div className="stat-info">
              <h2>{totalEvents}</h2>
              <p>Total Events</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <div className="stat-info">
              <h2>6</h2>
              <p>Categories</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="icon-box">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div className="stat-info">
              {/* DISPLAY THE FILTERED COUNT HERE */}
              <h2>{myEventsCount}</h2>
              <p>Created by You</p>
            </div>
          </div>
        </div>

        {/* ===== ACTION BAR ===== */}
        <div className="action-bar">
          <Link to="/create-event" className="action-btn primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Create New Event
          </Link>
          <Link to="/events" className="action-btn secondary">
            View All Events
          </Link>
        </div>

        {/* ===== RECENTLY ADDED ===== */}
        <div className="dashboard-section">
          <h2 className="section-title">Featured</h2>

          {savedEvents.length === 0 ? (
            <div className="empty-state">
              <p>No events created yet. Start building your community!</p>
            </div>
          ) : (
            <div className="widgets-grid">
              {upcoming.map((event, idx) => (
                <div key={idx} className="event-widget">
                  <div className="widget-header">
                    <span className="widget-category">{event.category || "General"}</span>
                    <span className="widget-date">{event.date}</span>
                  </div>
                  
                  <div className="widget-body">
                    <h3>{event.title}</h3>
                    <p className="widget-desc">{event.description.substring(0, 60)}...</p>
                  </div>

                  <div className="widget-footer">
                    <div className="meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      {event.time}
                    </div>
                    <div className="meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </>
  );
}