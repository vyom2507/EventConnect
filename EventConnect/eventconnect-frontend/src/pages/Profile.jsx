// src/pages/Profile.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/styles.css"; // The ONE and ONLY CSS file

export default function Profile() {
  const navigate = useNavigate();

  // Simulated User State
  const [user, setUser] = useState({
    name: "Vyom2507",
    email: "student@university.edu",
    role: "Community Organizer",
    bio: "Passionate about tech, coding, and organizing community meetups. Love React and UI Design!",
    joinedDate: "Nov 2025"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [stats, setStats] = useState({ created: 0, joined: 12 });

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    setStats(prev => ({ ...prev, created: events.length }));
  }, []);

  const handleLogout = () => {
    // Clear tokens if needed
    alert("Logged out successfully!");
    navigate("/login"); // Assuming you have a login route, or go to home '/'
  };

  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="profile-wrapper">
        <div className="profile-card">
          
          {/* Header */}
          <div className="profile-header">
            <div className="profile-avatar">
              {user.name.charAt(0)}
            </div>
            <div className="profile-info">
              {isEditing ? (
                 <input 
                   className="edit-input" 
                   value={user.name} 
                   onChange={(e) => setUser({...user, name: e.target.value})}
                 />
              ) : (
                <h1>{user.name}</h1>
              )}
              <p className="user-role">{user.role}</p>
            </div>
            <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>

          {/* Stats */}
          <div className="profile-stats-row">
            <div className="p-stat">
              <h3>{stats.created}</h3>
              <span>Created</span>
            </div>
            <div className="p-stat">
              <h3>{stats.joined}</h3>
              <span>Joined</span>
            </div>
            <div className="p-stat">
              <h3>{user.joinedDate}</h3>
              <span>Since</span>
            </div>
          </div>

          {/* Bio */}
          <div className="profile-section">
            <h2>About Me</h2>
            {isEditing ? (
              <textarea 
                className="edit-textarea"
                value={user.bio}
                onChange={(e) => setUser({...user, bio: e.target.value})}
              />
            ) : (
              <p className="bio-text">{user.bio}</p>
            )}
          </div>

          {/* Logout */}
          <button className="logout-btn" onClick={handleLogout}>
            Sign Out
          </button>

        </div>
      </div>
    </>
  );
}