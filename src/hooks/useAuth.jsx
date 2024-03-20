import React, { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ...
  }, []);

  return {
    user,
    isAuthenticated: Boolean(user),
    login: (newUser) => setUser(newUser),
    logout: () => setUser(null),
  };
}

// ...