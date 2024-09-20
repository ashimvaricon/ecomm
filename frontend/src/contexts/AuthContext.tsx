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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUser = getFromLocalStorage<User>("user");
    if (storedUser) {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    setInLocalStorage("user", userData);
  };

  const logout = () => {
    setUser(null);
    removeFromLocalStorage("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
