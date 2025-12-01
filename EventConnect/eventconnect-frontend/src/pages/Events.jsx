// src/pages/Events.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/styles.css";

export default function Events() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [allEvents, setAllEvents] = useState([]);

  // Default static events
  const defaultEvents = [
    {
      title: "Chicago Tech Meetup",
      date: "2025-02-10",
      time: "6:00 PM",
      location: "1871 Chicago – Merchandise Mart",
      description: "Networking for developers, founders, and students.",
      category: "Tech",
    },
    {
      title: "Illinois Tech Research Expo",
      date: "2025-03-05",
      time: "10:00 AM",
      location: "Illinois Institute of Technology – MTCC",
      description: "Showcase of student research & innovation projects.",
      category: "Education",
    },
    {
      title: "Chicago Spring Cultural Festival",
      date: "2025-04-12",
      time: "1:00 PM",
      location: "Navy Pier, Chicago",
      description: "Music, food stalls, art, and cultural performances.",
      category: "Festival",
    },
    {
      title: "Startup Pitch Night",
      date: "2025-02-28",
      time: "5:30 PM",
      location: "mHUB Chicago",
      description: "Local startups pitching innovative ideas.",
      category: "Tech",
    },
  ];

  // Load saved events
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("events")) || [];
    if (saved.length === 0 && allEvents.length === 0) {
        setAllEvents(defaultEvents);
    } else {
        setAllEvents(saved.length > 0 ? saved : defaultEvents);
    }
  }, []);

  const filtered = allEvents.filter((event) => {
    const key = search.toLowerCase();
    return (
      event.title.toLowerCase().includes(key) ||
      event.location.toLowerCase().includes(key) ||
      event.category.toLowerCase().includes(key)
    );
  });

  // --- ACTIONS ---
  const handleDelete = (indexToDelete) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const updatedEvents = allEvents.filter((_, index) => index !== indexToDelete);
      setAllEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    }
  };

  const handleEdit = (index) => {
    navigate(`/edit-event/${index}`);
  };

  function downloadICS(event) {
    // ... (Your existing download logic)
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.title}\nDTSTART:${event.date.replace(/-/g, "")}T${event.time.replace(":", "")}00\nLOCATION:${event.location}\nDESCRIPTION:${event.description}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${event.title}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="events-wrapper">
        
        {/* Top Bar */}
        <div className="events-top-bar">
          <div>
            <h1 className="events-page-title">Explore Events</h1>
            <p className="events-page-subtitle">Join the community and learn something new.</p>
          </div>
          <button className="create-event-btn" onClick={() => navigate("/create-event")}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Create Event
          </button>
        </div>

        {/* Search */}
        <div className="search-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input
            type="text"
            className="glass-search"
            placeholder="Search events, locations, or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className="events-grid-container">
          {filtered.map((event, index) => {
            // Calculate the TRUE index from the full list, not the filtered list
const originalIndex = allEvents.indexOf(event);
             const dateObj = new Date(event.date);
             const month = isNaN(dateObj) ? "EVT" : dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
             const day = event.date.split('-')[2]; 

            return (
              <div key={index} className="glass-event-card">
                
                <div className="date-badge">
                  <span className="db-month">{month}</span>
                  <span className="db-day">{day}</span>
                </div>

                <div className="event-content">
                  <div className="event-header-row" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span className="event-tag">{event.category}</span>
                    <div className="card-actions" style={{display: 'flex', gap: '10px'}}>
                        <button onClick={() => handleEdit(index)} style={{background:'transparent', border:'none', cursor:'pointer', color:'#a5b4fc'}}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        </button>
                        <button onClick={() => handleDelete(index)} style={{background:'transparent', border:'none', cursor:'pointer', color:'#ef4444'}}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                    </div>
                  </div>

                  {/* MAKE TITLE CLICKABLE */}
                  <h2 
                    className="event-heading" 
                    style={{cursor: 'pointer'}} 
                    onClick={() => navigate(`/events/${index}`)}
                  >
                    {event.title}
                  </h2>
                  
                  <div className="event-meta">
                    <p>{event.time}</p>
                    <p>{event.location}</p>
                  </div>
                  
                  <p className="event-desc">{event.description}</p>
                  
                  <div style={{display: 'flex', gap: '10px', marginTop: '15px'}}>
                    
                    {/* NEW: VIEW DETAILS BUTTON */}
                    <button 
                      className="add-cal-btn" 
                      style={{background: 'rgba(255,255,255,0.15)', border: 'none'}}
                      onClick={() => navigate(`/events/${originalIndex}`)}
                    >
                      View Details
                    </button>

                    {/* EXISTING: CALENDAR BUTTON */}
                    <button className="add-cal-btn" onClick={() => downloadICS(event)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><line x1="12" y1="15" x2="12" y2="15"></line></svg>
                      Save
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}