import { useState } from "react";
import "../Styles/styles.css";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);

  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="settings-wrapper">
        <div className="settings-glass-card">
          <h1>Account Settings</h1>
          <p className="settings-subtitle">Manage your preferences and privacy.</p>

          <hr className="divider" />

          {/* Notifications Section */}
          <div className="setting-row">
            <div className="setting-info">
              <h3>Email Notifications</h3>
              <p>Receive updates about upcoming events and registrations.</p>
            </div>
            <button 
              className={`toggle-btn ${notifications ? 'active' : ''}`} 
              onClick={() => setNotifications(!notifications)}
            >
              {notifications ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Privacy Section */}
          <div className="setting-row">
            <div className="setting-info">
              <h3>Public Profile</h3>
              <p>Allow other community members to see your joined events.</p>
            </div>
            <button 
              className={`toggle-btn ${publicProfile ? 'active' : ''}`} 
              onClick={() => setPublicProfile(!publicProfile)}
            >
              {publicProfile ? 'Visible' : 'Hidden'}
            </button>
          </div>

          <hr className="divider" />

          {/* Password Change (Visual Only) */}
          <h3>Security</h3>
          <div className="form-group" style={{marginTop: '15px'}}>
            <label>Change Password</label>
            <input type="password" placeholder="New Password" className="glass-input" />
          </div>
          <button className="secondary-btn" style={{marginTop: '10px'}}>Update Password</button>

          <div className="danger-zone">
            <h3>Danger Zone</h3>
            <button className="delete-account-btn" onClick={() => alert("This action is permanent!")}>Delete Account</button>
          </div>

        </div>
      </div>
    </>
  );
}