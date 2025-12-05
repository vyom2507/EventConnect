

const KEYS = {
  USERS: "users",
  EVENTS: "events",
  SESSION: "currentUser"
};

export const db = {
  
  users: {
    getAll: () => {
      
      return JSON.parse(localStorage.getItem(KEYS.USERS)) || [];
    },
    add: (userData) => {
     
      const users = db.users.getAll();
      if (users.find(u => u.email === userData.email)) {
        throw new Error("User already exists");
      }
      users.push(userData);
      localStorage.setItem(KEYS.USERS, JSON.stringify(users));
      return userData;
    }
  },

  
  events: {
    getAll: () => {
      return JSON.parse(localStorage.getItem(KEYS.EVENTS)) || [];
    },
    
    getByCreator: (email) => {
      const all = db.events.getAll();
      return all.filter(e => e.createdBy === email);
    },
    add: (eventData) => {
      const events = db.events.getAll();
      events.push(eventData);
      localStorage.setItem(KEYS.EVENTS, JSON.stringify(events));
      return eventData;
    },
    delete: (index) => {
      const events = db.events.getAll();
      events.splice(index, 1);
      localStorage.setItem(KEYS.EVENTS, JSON.stringify(events));
    }
  },

  
  session: {
    get: () => JSON.parse(localStorage.getItem(KEYS.SESSION)),
    set: (user) => localStorage.setItem(KEYS.SESSION, JSON.stringify(user)),
    clear: () => localStorage.removeItem(KEYS.SESSION)
  }
};