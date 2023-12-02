import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import {
  loginAPI,
  registerAPI,
  verifyValidToken,
} from "../../api/apiDataSource";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkValidToken = async () => {
      const actualToken = localStorage.getItem("jwt");
      const actualUser = localStorage.getItem("user");
      if (actualToken && actualUser) {
        try {
          const isValidToken = await verifyValidToken(actualToken);
          if (isValidToken) {
            setSession(JSON.parse(actualUser));
          } else {
            logout();
          }
        } catch (error) {
          console.error("Error trying to verify token:", error);
          logout();
        }
      }
      setLoading(false);
    };
    checkValidToken();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await loginAPI({ email, password });
      setSession(response.user);
      return response;
    } catch (error) {
      console.error("Error trying to login:", error);
    }
  };

  const register = async (userInfo) => {
    try {
      console.log(userInfo, "user info");
      const response = await registerAPI(userInfo);
      setSession(response.user);
      return response;
    } catch (error) {
      console.error("Error trying to register:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    setSession(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ session, setSession, login, logout, register, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
