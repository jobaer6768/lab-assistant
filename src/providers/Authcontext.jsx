import { createContext, useContext, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");
  const axiosPublic = useAxiosPublic();

  const login = async (userData) => {
    try {
      const response = await axiosPublic.post("/auth/login", userData);
      const { token } = response.data;
      setToken(token);
      sessionStorage.setItem("token", token);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const register = async (userData) => {
    try {
      const response = await axiosPublic.post("/auth/register", userData);
      console.log(response.data);
    } catch (error) {
      console.error("Error registering in:", error);
    }
  };

  const logout = () => {
    setToken("");
    sessionStorage.removeItem("token");
  };

  // Check if the user is authenticated
  const isAuthenticated = () => {
    return !!token;
  };

  return (
    <AuthContext.Provider
      value={{ token, login, register, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
