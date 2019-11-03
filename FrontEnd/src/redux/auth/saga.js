import { call, put, all, takeLatest, take } from "redux-saga/effects";
import axios from "axios";
import {
  loginSuccess,
  logout,
  loginError,
  loginRequest,
  checkAuthorization
} from "./action";
import { clearToken, getToken } from "containers/Auth/authFunctions";
import { Api } from "../../settings/consts";

export function* CheckAuthorization() {
  const token = getToken().get("idToken");
  if (token) {
    yield put(loginSuccess(token));
  } else {
    yield put(loginRequest());
  }
}
export function* LoginRequest(action) {
  try {
    let response = yield call(axios.get, `${Api.BASE_URL}login`);
    yield put(loginSuccess(response.token));
  } catch {
    yield put(loginError());
  }
}
export function* Logout() {
  clearToken();
}
export function* LoginSuccess(action) {
  yield localStorage.setItem("id_token", action.payload.token);
}
export function* LoginError() {}

export default all([
  takeLatest("@auth/CHECK_AUTHORIZATION", CheckAuthorization),
  takeLatest("@auth/LOGIN_SUCCESS", LoginSuccess),
  takeLatest("@auth/LOGIN_ERROR", LoginError),
  takeLatest("@auth/LOGIN_REQUEST", LoginRequest),
  takeLatest("@auth/LOGOUT", Logout)
]);
