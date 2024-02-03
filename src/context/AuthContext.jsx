import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext({
  currentUser: INITIAL_STATE.currentUser,
  dispatch: () => null,
  logout: () => null, // Add a logout function to the context
});

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
