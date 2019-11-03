import { call, put, all, takeLatest, select } from "redux-saga/effects";
import axios from "axios";
import { toast } from "react-toastify";
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
  let departaments = yield select(state => state.Departament.departament);
  let exist = departaments.filter(e => e.nome === action.payload.nome);
  if (exist.length === 0) {
    try {
      let response = yield call(
        axios.post,
        `${Api.BASE_URL}departamento`,
        action.payload
      );
      if (response.status === 201) {
        toast.success("Cadastro realizado com sucesso");
      }

      yield put(searchDepartamentRequest());
      yield put(submitDepartamentSuccess(response.data));
    } catch (error) {
      yield put(submitDepartamentError(error));
    }
  } else {
    toast.error("Error, Departamento ja existente! ");
  }
}

export default all([
  takeLatest("@departament/SEARCH_REQUEST", searchDepartament),
  takeLatest("@departament/SUBMIT_REQUEST", submitDepartament)
]);
