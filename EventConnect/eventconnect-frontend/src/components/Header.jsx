// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header>
      <div className="header-inner">
        <div className="logo">
          <Link to="/">EventConnect</Link>
        </div>

        <nav className="menu">
          <Link to="/">Home</Link>

          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/Dashboard">Dashboard</Link>
            </>
          )}

          {user && (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
