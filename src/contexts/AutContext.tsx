import { createContext } from "react";
import type { AuthActionTypes, initialState } from "../reducers/auth.reducer";

type AuthContextType = {
  state: typeof initialState;
  dispatch: React.Dispatch<AuthActionTypes>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
