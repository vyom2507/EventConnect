// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/styles.css";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Get all registered users
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 2. Find user matching Email AND Password
    const validUser = existingUsers.find(
      (user) => user.email === credentials.email && user.password === credentials.password
    );

    if (validUser) {
      // 3. Save the *Current* user to local storage (Login Session)
      localStorage.setItem("currentUser", JSON.stringify(validUser));
      
      alert(`Welcome dear, ${validUser.name}!`);
      navigate("/dashboard");
    } else {
      alert("❌ Invalid Email or Password. Please try again.");
    }
  };

  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="auth-wrapper">
        <div className="auth-glass-card">
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Enter your details to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="auth-form">
            <div className="input-group-auth">
              <label>Email Address</label>
              <input 
                name="email"
                type="email" 
                placeholder="name@example.com" 
                value={credentials.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group-auth">
              <label>Password</label>
              <div className="password-wrapper">
                <input 
                  name="password"
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  value={credentials.password}
                  onChange={handleChange}
                  required 
                />
                <button 
                  type="button" 
                  className="show-pass-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-auth">Sign In</button>
          </form>

          <p className="auth-footer">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}