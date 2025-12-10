EventConnect

A Community-Driven Event Management Platform:
EventConnect is a modern Single Page Application (SPA) designed to help communities discover, organize, and manage local events seamlessly. It features a complete authentication system, a dynamic dashboard, and full CRUD capabilities for event management, built with a scalable React architecture and Glassmorphism design system.

Live Deployment:
https://communityeventhub.netlify.app

Key Features:
Authentication & User Profile
Secure Login/Register functionality with custom validation logic.
Duplicate account prevention based on email addresses.
Persistent user sessions using React Context API and LocalStorage.
User Settings interface to manage profile preferences and notifications.

Event Management (CRUD):
Create: Organizers can publish events with title, category, date, time, location, and description.
Read: Personalized dashboard displaying "Total Events" vs. "Created by You".
Update: Dedicated edit interface that pre-fills existing data for modification.
Delete: Smart permissions ensure users can only delete events they created.

Discovery & UX:
Advanced Search: Real-time filtering by event title, location, or category.
Dynamic Details Page: Dedicated page for each event with a dynamic Google Maps embed.
Responsive Design: Layout adapts seamlessly to mobile, tablet, and desktop screens.
Contact Form: Functional support interface for user inquiries.

Technology Stack:
Frontend Framework: React.js (Vite)
Routing: React Router v6
State Management: React Context API
Styling: Pure CSS3 (Glassmorphism Design System)
Data Persistence: Browser LocalStorage (Client-Side Persistence)
Architecture: Service Layer Pattern (db.js) for data abstraction

Deployment: Netlify (Automated CI/CD Pipeline)

Project Management: Jira (Agile/Scrum)

Architecture & Data Persistence

This application utilizes a Serverless, Client-First architecture.

Data Service Layer: A dedicated src/services/db.js file abstracts all data operations, simulating a backend repository pattern.

Storage: Data is persisted in the browser's Local Storage API, allowing the application to maintain state across page refreshes and browser restarts without a dedicated backend server.

Session Management: Authentication state is managed via tokens stored in Local Storage, verified by the AuthContext provider.

Local Installation

Clone the repository
git clone https://github.com/vyom2507/EventConnect.git
cd EventConnect/eventconnect-frontend

Install Dependencies
npm install

Run the Development Server
npm run dev

Open in Browser
Navigate to http://localhost:5173

Project Structure

src/
├── components/      # Reusable UI components (Header, Cards)
├── context/         # AuthContext for global state management
├── pages/           # Application views (Home, Dashboard, Events, etc.)
├── services/        # Data Abstraction Layer (db.js)
├── Styles/          # Global CSS variables and styles
├── App.jsx          # Main Router configuration
└── main.jsx         # Entry point

Testing Strategy

Due to the project scope, a Manual User Acceptance Testing (UAT) strategy was adopted. Critical user flows (Authentication, Event Creation, Deletion, Routing) were rigorously tested against defined acceptance criteria. A Google Lighthouse audit was conducted to ensure accessibility compliance (WCAG 2.1) and performance optimization.

Future Scope

Backend Migration: Replace the db.js LocalStorage implementation with a Node.js/MongoDB API.

Image Hosting: Integrate Cloudinary for custom event banner uploads.

Social Features: Implement comment sections and attendee lists.

Developed by Vyom2507 | Final Year Capstone Project
