import { call, put, all, takeLatest, take } from "redux-saga/effects";
import axios from "axios";
import {
  searchDepartamentError,
  searchDepartamentSuccess,
  submitDepartamentSuccess,
  submitDepartamentError,
  searchDepartamentRequest
} from "./action";
import { Api } from "../../settings/consts";

function* searchDepartament() {
  try {
    let response = yield call(axios.get, `${Api.BASE_URL}departamento`);
    yield put(searchDepartamentSuccess(response.data));
  } catch (error) {
    yield put(searchDepartamentError(error));
  }
}

function* submitDepartament(action) {
  try {
    let response = yield call(
      axios.post,
      `${Api.BASE_URL}departamento`,
      action.payload
    );
    yield put(searchDepartamentRequest());
    yield put(submitDepartamentSuccess(response.data));
  } catch (error) {
    yield put(submitDepartamentError(error));
  }
}

export default all([
  takeLatest("@departament/SEARCH_REQUEST", searchDepartament),
  takeLatest("@departament/SUBMIT_REQUEST", submitDepartament)
]);
