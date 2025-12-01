// src/pages/EventDetails.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/styles.css";

export default function EventDetails() {
  const { id } = useParams(); // Get the index from URL (e.g., /events/0)
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // 1. Reconstruct the full list of events (Defaults + Saved)
    const saved = JSON.parse(localStorage.getItem("events")) || [];
    const defaultEvents = [
      {
        title: "Chicago Tech Meetup",
        date: "2025-02-10",
        time: "6:00 PM",
        location: "1871 Chicago – Merchandise Mart",
        description: "Networking for developers, founders, and students. Join us for an evening of code, pizza, and connection.",
        category: "Tech",
      },
      {
        title: "Illinois Tech Research Expo",
        date: "2025-03-05",
        time: "10:00 AM",
        location: "Illinois Institute of Technology – MTCC",
        description: "Showcase of student research & innovation projects. See the future of technology built by students.",
        category: "Education",
      },
      {
        title: "Chicago Spring Cultural Festival",
        date: "2025-04-12",
        time: "1:00 PM",
        location: "Navy Pier, Chicago",
        description: "Music, food stalls, art, and cultural performances celebrating the diversity of Chicago.",
        category: "Festival",
      },
      {
        title: "Startup Pitch Night",
        date: "2025-02-28",
        time: "5:30 PM",
        location: "mHUB Chicago",
        description: "Local startups pitching innovative ideas to investors. Watch live demos and meet the founders.",
        category: "Tech",
      },
    ];

    // Combine them exactly how Events.jsx does
    let allEvents = [];
    if (saved.length === 0) {
        allEvents = defaultEvents;
    } else {
        // If saved exists, we assume it might contain defaults if you implemented it that way, 
        // OR we prepend defaults. For safety in this project, let's assume 'saved' is the source of truth if it exists,
        // or we combine. 
        // To keep indices matching Events.jsx:
        allEvents = saved.length > 0 ? saved : defaultEvents;
    }

    // 2. Find the specific event by Index
    const foundEvent = allEvents[parseInt(id)];

    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      // Handle "Not Found"
      alert("Event not found!");
      navigate("/events");
    }
  }, [id, navigate]);

  if (!event) return <div className="loading-text">Loading Details...</div>;

  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="details-wrapper">
        
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate("/events")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Events
        </button>

        {/* Main Content Card */}
        <div className="details-card">
          
          {/* Header Section */}
          <div className="details-header">
            <span className="event-tag large">{event.category}</span>
            <h1>{event.title}</h1>
            <div className="details-meta-row">
               <div className="meta-pill">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                 {event.date} at {event.time}
               </div>
               <div className="meta-pill">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                 {event.location}
               </div>
            </div>
          </div>

          <hr className="divider" />

          {/* Grid Layout: Description & Sidebar */}
          <div className="details-grid">
            
            {/* Left Column: Description */}
            <div className="details-left">
              <h3>About this Event</h3>
              <p className="details-desc">{event.description}</p>
              <p className="details-desc">
              </p>

              <h3>Agenda</h3>
              <ul className="agenda-list">
                <li><span>Start</span> Arrival & Welcome</li>
  <li><span>Main</span> Event Activities & Highlights</li>
  <li><span>End</span> Closing & Community Social</li>
              </ul>
            </div>

            {/* Right Column: Sidebar (Map/Organizer) */}
            <div className="details-right">
              
              {/* Fake Map */}
              {/* Dynamic Map Embed - No API Key Needed */}
<div className="map-container" style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '20px' }}>
  <iframe 
    width="100%" 
    height="250" 
    frameBorder="0" 
    scrolling="no" 
    marginHeight="0" 
    marginWidth="0" 
    src={`https://maps.google.com/maps?q=${encodeURIComponent(event.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
    title="Event Location"
  ></iframe>
</div>

{/* Directions Button */}
<a 
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`} 
  target="_blank" 
  rel="noopener noreferrer"
  className="directions-btn"
  style={{
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '8px',
    width: '100%',
    padding: '12px',
    background: 'rgba(255,255,255,0.1)',
    color: 'white',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.2)',
    marginBottom: '20px',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600'
  }}
>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
  Get Directions
</a>

              {/* Organizer Info */}
              <div className="organizer-box">
                <h4>Organizer</h4>
                <div className="org-profile">
                  <div className="org-avatar">A</div>
                  <div>
                    <p className="org-name">Admin Organizer</p>
                    <p className="org-role">EventConnect Team</p>
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <button className="register-main-btn" onClick={() => alert("Registration Confirmed! Check your email.")}>
                Register Now (Free)
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}