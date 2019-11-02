import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  searchEmployeesError,
  searchEmployeesSuccess,
  submitEmployeesSuccess,
  submitEmployeesError,
  searchEmployeesRequest
} from "./action";
import { Api } from "../../settings/consts";

function* searchEmployees() {
  try {
    let response = yield call(axios.get, `${Api.BASE_URL}funcionario`);
    yield put(searchEmployeesSuccess(response.data));
  } catch (error) {
    yield put(searchEmployeesError(error));
  }
}

function* submitEmployees(action) {
  try {
    let response = yield call(
      axios.post,
      `${Api.BASE_URL}funcionario`,
      action.payload
    );
    yield put(searchEmployeesRequest());
    yield put(submitEmployeesSuccess(response.data));
  } catch (error) {
    yield put(submitEmployeesError(error));
  }
}

export default all([
  takeLatest("@employees/SEARCH_REQUEST", searchEmployees),
  takeLatest("@employees/SUBMIT_REQUEST", submitEmployees)
]);
