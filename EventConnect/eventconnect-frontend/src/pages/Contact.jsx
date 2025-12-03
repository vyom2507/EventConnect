import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/styles.css";

export default function Contact() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate sending data
    setTimeout(() => {
      alert("Message sent! We will get back to you shortly.");
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <div className="page-bg" style={{ backgroundImage: `url('/images/event-bg.jpg')` }} />
      <div className="page-bg-overlay" />

      <div className="contact-wrapper">
        <div className="contact-glass-card">
          
          <div className="contact-header">
            <h1>Get in Touch</h1>
            <p>Have questions about an event or need support? We're here to help.</p>
          </div>

          {submitted ? (
            <div className="success-message">
              <h2>✅ Message Sent!</h2>
              <p>Thank you for reaching out.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" required placeholder="John Doe" className="glass-input" />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" required placeholder="john@example.com" className="glass-input" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <select className="glass-input glass-select">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Report an Event</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea required placeholder="How can we help you?" className="glass-input textarea-field"></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}