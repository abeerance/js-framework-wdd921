import { AuthContextData, AuthProviderProps, User } from "@/types/types";
import { API_URL } from "@/utils/constants";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// initialise AuthContext and export it
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

// AuthProvider, provides the AuthContext to the children
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // setting user with the useState hook
  const [user, setUser] = useState<User | null>(null);

  // useEffect to get user from localStorage
  useEffect(() => {
    // get the current value of item "user" in the localStorage
    const storedUser = localStorage.getItem("user");

    // if there is a user in the localStorage, set the user
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // function to register the user
  const signup = async (email: string, password: string) => {
    try {
      // fetch the signup endpoint
      const response = await axios.post(`${API_URL}auth/local/register`, {
        username: email,
        email,
        password,
      });

      // extract user and jwt from response and set it in the localStorage
      const { user, jwt } = response.data;
      // set the user in the localStorage
      localStorage.setItem("user", JSON.stringify(user));
      // set the jwt in the localStorage
      localStorage.setItem("jwt", jwt);
      // set user in useState
      setUser(user);
      return true;
    } catch (error) {
      console.error("Error while signing up", error);
      return false;
    }
  };

  // function to login the user
  // APIURL auth/local
  // in the response you will send the email and the password as "identifier" -> from axios docs
  const login = async (email: string, password: string) => {
    try {
      // post request to the login endpoint
      const response = await axios.post(`${API_URL}auth/local`, {
        identifier: email,
        password,
      });

      // extract user and jwt from response and set it in the localStorage
      const { user, jwt } = response.data;
      // set the user in the localStorage
      localStorage.setItem("user", JSON.stringify(user));
      // set the jwt in the localStorage
      localStorage.setItem("jwt", jwt);
      // set user in useState
      setUser(user);
      return true;
    } catch (error) {
      console.error("Error while logging in", error);
      return false;
    }
  };

  // function to logout the user
  // remove the user and jwt from the localStorage
  // set the user to null
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// userAuth hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
