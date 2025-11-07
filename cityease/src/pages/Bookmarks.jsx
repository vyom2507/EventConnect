import React from "react";
import "../styles/styles.css";

function Bookmarks() {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: "url('/images/bookmark.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Your Bookmarked Spots</h1>
          <p>
            Save and manage your favorite places in Chicago - restaurants,
            landmarks, or hidden gems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bookmarks;
