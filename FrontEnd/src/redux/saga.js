import { all } from "redux-saga/effects";
import authSagas from "./auth/rootSagas";
import departamentSagas from "./departament/rootSagas";
import employeesSagas from "./employees/rootSagas";
import movimentsSagas from "./financialMoviments/rootSagas";

export default function* rootSaga() {
  yield all([
    departamentSagas(),
    employeesSagas(),
    movimentsSagas(),
    authSagas()
  ]);
}
