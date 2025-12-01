// src/pages/CreateEvent.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/styles.css";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    category: "",
  });

  // --- NEW: Check Login Status ---
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      alert("You must be logged in to create an event!");
      navigate("/login");
    } else {
      setCurrentUser(user);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];

    // --- NEW: Tag the event with the user's email ---
    const newEvent = {
      ...form,
      createdBy: currentUser.email 
    };

    savedEvents.push(newEvent);
    localStorage.setItem("events", JSON.stringify(savedEvents));
    
    alert("🎉 Event Created Successfully!");
    navigate("/events");
  };

  return (
    <>
      {/* Background Layers */}
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="create-wrapper">
        
        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back
        </button>

        <div className="create-glass-panel">
          <div className="panel-header">
            <h2>Create New Event</h2>
            <p>Host a meetup, workshop, or party for the community.</p>
          </div>

          <form onSubmit={handleSubmit} className="create-form">
            
            {/* Title */}
            <div className="form-group">
              <label>Event Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="e.g. Chicago Tech Social"
                className="glass-input"
              />
            </div>

            {/* Category + Location */}
            <div className="form-row">
              <div className="form-group half">
                <label>Category</label>
                <div className="select-wrapper">
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="glass-input glass-select"
                  >
                    <option value="" disabled>Select Category</option>
                    <option value="Tech">Tech</option>
                    <option value="Education">Education</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Festival">Festival</option>
                    <option value="Sports">Sports</option>
                    <option value="Career">Career</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Community">Community</option>
                  </select>
                  <svg className="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>

              <div className="form-group half">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                  placeholder="City or Venue"
                  className="glass-input"
                />
              </div>
            </div>

            {/* Date + Time */}
            <div className="form-row">
              <div className="form-group half">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="glass-input"
                />
              </div>
              <div className="form-group half">
                <label>Time</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="glass-input"
                />
              </div>
            </div>

            {/* Description */}
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
                placeholder="Tell people what this event is about..."
                className="glass-input textarea-field"
              />
            </div>

            {/* Submit */}
            <button className="submit-btn" type="submit">
              Publish Event
            </button>
            
          </form>
        </div>
      </div>
    </>
  );
}