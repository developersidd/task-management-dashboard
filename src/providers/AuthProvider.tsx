import React from "react";
import AuthContext from "../contexts/AutContext";
import AuthReducer, { initialState } from "../reducers/auth.reducer";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
