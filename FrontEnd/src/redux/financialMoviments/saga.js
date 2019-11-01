import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  searchMovimentsError,
  searchMovimentsSuccess,
  submitMovimentsSuccess,
  submitMovimentsError
} from "./action";

function* searchMoviments() {
  try {
    let response = yield call(axios.get, `${""}`);
    yield put(searchMovimentsSuccess(response));
  } catch (error) {
    yield put(searchMovimentsError(error));
  }
}

function* submitMoviments(action) {
  console.log(action);
  try {
    let response = yield call(axios.post, `${action.payload}`);
    yield put(submitMovimentsSuccess(response));
  } catch (error) {
    yield put(submitMovimentsError(error));
  }
}

export default all([
  takeLatest("@moviments/SEARCH_REQUEST", searchMoviments),
  takeLatest("@moviments/SUBMIT_REQUEST", submitMoviments)
]);
