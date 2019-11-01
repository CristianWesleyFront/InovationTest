import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  searchEmployeesError,
  searchEmployeesSuccess,
  submitEmployeesSuccess,
  submitEmployeesError
} from "./action";

function* searchEmployees() {
  try {
    let response = yield call(axios.get, `${""}`);
    yield put(searchEmployeesSuccess(response));
  } catch (error) {
    yield put(searchEmployeesError(error));
  }
}

function* submitEmployees(action) {
  console.log(action);
  try {
    let response = yield call(axios.get, `${action.payload}`);
    yield put(submitEmployeesSuccess(response));
  } catch (error) {
    yield put(submitEmployeesError(error));
  }
}

export default all([
  takeLatest("@employees/SEARCH_REQUEST", searchEmployees),
  takeLatest("@employees/SUBMIT_REQUEST", submitEmployees)
]);
