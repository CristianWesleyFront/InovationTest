export const submitDepartamentRequest = departament => {
  return {
    type: "@departament/SUBMIT_REQUEST",
    payload: {
      nome: departament
    }
  };
};
export const submitDepartamentSuccess = data => {
  return {
    type: "@departament/SUBMIT_SUCCESS",
    payload: data
  };
};
export const submitDepartamentError = error => {
  return {
    type: "@departament/SUBMIT_ERROR",
    error
  };
};
export const searchDepartamentRequest = () => {
  return {
    type: "@departament/SEARCH_REQUEST"
  };
};
export const searchDepartamentSuccess = data => {
  return {
    type: "@departament/SEARCH_SUCCESS",
    payload: data
  };
};
export const searchDepartamentError = error => {
  return {
    type: "@departament/SEARCH_ERROR",
    error
  };
};
