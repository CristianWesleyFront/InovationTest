import { all } from "redux-saga/effects";

import sagas from "./saga";

export default function* rootSaga() {
  return yield all({
    sagas
  });
}
