import { call, put, all, takeLatest, take } from "redux-saga/effects";
import axios from "axios";
import {
  searchDepartamentError,
  searchDepartamentSuccess,
  submitDepartamentSuccess,
  submitDepartamentError
} from "./action";

function* searchDepartament() {
  try {
    let response = yield call(axios.get, `${""}`);
    yield put(searchDepartamentSuccess(response));
  } catch (error) {
    yield put(searchDepartamentError(error));
  }
}

function* submitDepartament(action) {
  console.log(action);
  try {
    let response = yield call(axios.get, `${action.payload}`);
    yield put(submitDepartamentSuccess(response));
  } catch (error) {
    yield put(submitDepartamentError(error));
  }
}

export default all([
  takeLatest("@departament/SEARCH_REQUEST", searchDepartament),
  takeLatest("@departament/SUBMIT_REQUEST", submitDepartament)
]);
