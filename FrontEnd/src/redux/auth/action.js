export const checkAuthorization = () => {
  return {
    type: "@auth/CHECK_AUTHORIZATION"
  };
};
export const loginSuccess = tokem => {
  return {
    type: "@auth/LOGIN_SUCCESS",
    payload: tokem
  };
};
export const loginError = error => {
  return {
    type: "@auth/LOGIN_ERROR",
    error
  };
};
export const loginRequest = () => {
  return {
    type: "@auth/LOGIN_REQUEST"
  };
};
export const logout = () => {
  return {
    type: "@auth/LOGOUT"
  };
};
