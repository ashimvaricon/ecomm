import React, { createContext, useState, useEffect } from "react";
import { AuthContextType, User } from "../types/index";
import {
  getFromLocalStorage,
  setInLocalStorage,
  removeFromLocalStorage,
} from "../utils/localStorage";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = getFromLocalStorage("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData: User) => {
    //console.log("Logging in user:", userData); // Debugging line
    setUser(userData);
    setInLocalStorage("user", userData);
  };

  const logout = () => {
    //console.log("Logging out user"); // Debugging line
    setUser(null);
    removeFromLocalStorage("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
