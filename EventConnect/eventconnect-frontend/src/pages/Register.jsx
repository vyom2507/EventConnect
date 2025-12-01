// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/styles.css";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    address:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // 1. Get existing users from Local Storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 2. Check if email already exists
    const userExists = existingUsers.find((user) => user.email === formData.email);

    if (userExists) {
      alert("⚠️ User with this email already exists! Please Login.");
      return;
    }

    // 3. Add new user to the list
    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("✅ Registration Successful! Please Login.");
    navigate("/login");
  };

  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="auth-wrapper">
        <div className="auth-glass-card">
          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Join the community today</p>
          </div>

          <form onSubmit={handleRegister} className="auth-form">
            <div className="input-group-auth">
              <label>Full Name</label>
              <input 
                name="name" 
                type="text" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group-auth">
              <label>Email Address</label>
              <input 
                name="email" 
                type="email" 
                placeholder="name@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group-auth">
              <label>Contact Number</label>
              <input 
                name="contact" 
                type="tel" 
                placeholder="+1 234 567 890" 
                value={formData.contact}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group-auth">
              <label>Password</label>
              <input 
                name="password" 
                type="password" 
                placeholder="Create a strong password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
            

            <button type="submit" className="btn-auth">Create Account</button>
          </form>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}