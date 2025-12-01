import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/styles.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import Profile from "./pages/Profile";
import EventDetails from "./pages/EventDetails";
import EditEvent from "./pages/EditEvent";
import { AuthProvider } from "./context/AuthContext";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Header />

        {/* GLOBAL CENTERED WRAPPER */}
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/edit-event/:id" element={<EditEvent />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
