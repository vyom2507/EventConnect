// src/pages/EditEvent.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Styles/styles.css";

export default function EditEvent() {
  const { id } = useParams(); // Get the index from the URL
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
    category: "",
  });

  // Load the specific event data when the page opens
  useEffect(() => {
    // 1. Define Defaults (Same as other pages)
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

    // 2. Get current state from LocalStorage
    const saved = JSON.parse(localStorage.getItem("events")) || [];
    
    // 3. Merge to get the Full List
    let allEvents = saved.length > 0 ? saved : defaultEvents;

    // 4. Find the event to edit
    const eventToEdit = allEvents[parseInt(id)];

    if (eventToEdit) {
      setForm(eventToEdit);
    } else {
      alert("Event not found!");
      navigate("/events");
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // 1. Re-construct the full list
    const defaultEvents = [ /* ... same defaults as above ... */
      { title: "Chicago Tech Meetup", date: "2025-02-10", time: "6:00 PM", location: "1871 Chicago – Merchandise Mart", description: "Networking for developers.", category: "Tech" },
      { title: "Illinois Tech Research Expo", date: "2025-03-05", time: "10:00 AM", location: "Illinois Institute of Technology – MTCC", description: "Showcase of student research.", category: "Education" },
      { title: "Chicago Spring Cultural Festival", date: "2025-04-12", time: "1:00 PM", location: "Navy Pier, Chicago", description: "Music and food.", category: "Festival" },
      { title: "Startup Pitch Night", date: "2025-02-28", time: "5:30 PM", location: "mHUB Chicago", description: "Local startups pitching.", category: "Tech" },
    ];

    const saved = JSON.parse(localStorage.getItem("events")) || [];
    // If we are editing, we must ensure we have a full list in LocalStorage to modify
    let allEvents = saved.length > 0 ? saved : defaultEvents;

    // 2. Update the specific item
    allEvents[parseInt(id)] = form;

    // 3. Save the WHOLE modified list back to LocalStorage
    localStorage.setItem("events", JSON.stringify(allEvents));

    alert("✅ Event Updated Successfully!");
    navigate("/events");
  };

  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="create-wrapper">
        <button className="back-btn" onClick={() => navigate("/events")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Cancel Edit
        </button>

        <div className="create-glass-panel">
          <div className="panel-header">
            <h2>Edit Event</h2>
            <p>Update the details for this event.</p>
          </div>

          <form onSubmit={handleUpdate} className="create-form">
            <div className="form-group">
              <label>Event Title</label>
              <input type="text" name="title" value={form.title} onChange={handleChange} required className="glass-input" />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Category</label>
                <div className="select-wrapper">
                  <select name="category" value={form.category} onChange={handleChange} required className="glass-input glass-select">
                    <option value="" disabled>Select Category</option>
                    <option value="Tech">Tech</option>
                    <option value="Education">Education</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Festival">Festival</option>
                    <option value="Sports">Sports</option>
                    <option value="Community">Community</option>
                  </select>
                </div>
              </div>
              <div className="form-group half">
                <label>Location</label>
                <input type="text" name="location" value={form.location} onChange={handleChange} required className="glass-input" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="glass-input" />
              </div>
              <div className="form-group half">
                <label>Time</label>
                <input type="time" name="time" value={form.time} onChange={handleChange} required className="glass-input" />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea name="description" value={form.description} onChange={handleChange} required className="glass-input textarea-field" />
            </div>

            <button className="submit-btn" type="submit">Update Event</button>
          </form>
        </div>
      </div>
    </>
  );
}