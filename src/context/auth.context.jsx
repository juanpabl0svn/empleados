"use client";

import { createContext, useContext, useReducer } from "react";
import authReducer from "./auth.reducer";

const INITIAL_STATE = {
  user: "",
  token: "",
  isLoggedIn: false,
  route: window.location.pathname.split("/")[2] ?? "",
  employees: null,
};

const AuthContext = createContext(INITIAL_STATE);

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logIn(user) {
          dispatch({ type: "LOGIN", payload: user });
        },
        setRoute(route) {
          dispatch({ type: "SET_ROUTE", payload: route });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
