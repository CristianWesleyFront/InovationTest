import { all } from "redux-saga/effects";
// import authSagas from './auth/rootsaga';
import departamentSagas from "./departament/rootSagas";
// import employeesSagas from './employees/rootSagas';
// import movimentsSagas from './financialMoviments/rootSagas';

export default function* rootSaga() {
  yield all([departamentSagas()]);
}
