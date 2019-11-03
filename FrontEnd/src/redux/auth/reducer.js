import INITIAL_STATE from "./store";

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/LOGIN_SUCCESS":
      return { ...state, idToken: action.token, isLogin: true };
    case "@auth/LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
}
