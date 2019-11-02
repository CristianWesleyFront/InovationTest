import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  searchMovimentsError,
  searchMovimentsSuccess,
  submitMovimentsSuccess,
  submitMovimentsError,
  searchMovimentsRequest
} from "./action";
import { Api } from "../../settings/consts";

function* searchMoviments() {
  try {
    let response = yield call(axios.get, `${Api.BASE_URL}movimentacao`);
    yield put(searchMovimentsSuccess(response.data));
  } catch (error) {
    yield put(searchMovimentsError(error));
  }
}

function* submitMoviments(action) {
  try {
    let response = yield call(
      axios.post,
      `${Api.BASE_URL}movimentacao`,
      action.payload
    );
    yield put(searchMovimentsRequest());
    yield put(submitMovimentsSuccess(response));
  } catch (error) {
    yield put(submitMovimentsError(error));
  }
}

export default all([
  takeLatest("@moviments/SEARCH_REQUEST", searchMoviments),
  takeLatest("@moviments/SUBMIT_REQUEST", submitMoviments)
]);
