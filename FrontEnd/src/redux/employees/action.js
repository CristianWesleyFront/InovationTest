export const submitEmployeesRequest = employees => {
  return {
    type: "@employees/SUBMIT_REQUEST",
    payload: employees
  };
};
export const submitEmployeesSuccess = data => {
  return {
    type: "@employees/SUBMIT_SUCCESS",
    payload: data
  };
};
export const submitEmployeesError = error => {
  return {
    type: "@employees/SUBMIT_ERROR",
    error
  };
};
export const searchEmployeesRequest = () => {
  return {
    type: "@employees/SEARCH_REQUEST"
  };
};
export const searchEmployeesSuccess = data => {
  return {
    type: "@employees/SEARCH_SUCCESS",
    payload: data
  };
};
export const searchEmployeesError = error => {
  return {
    type: "@employees/SEARCH_ERROR",
    error
  };
};
