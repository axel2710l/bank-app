import { getAuth } from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { signup } from "../utils/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      console.log("authStatecHanfed");
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
