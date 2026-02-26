import { LOGGEDOUT, SET_USER } from "../actions/auth.action";
import type { UserType } from "../types";
export const initialState = {
  user: null as UserType | null,
};

type AuthState = typeof initialState;
export type AuthActionTypes =
  | {
      type: typeof SET_USER;
      payload: UserType;
    }
  | {
      type: typeof LOGGEDOUT;
    };

const AuthReducer = (
  state: AuthState = initialState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case LOGGEDOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default AuthReducer;
