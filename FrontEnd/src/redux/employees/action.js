export const submitEmployeesRequest = employees => {
  return {
    type: "@employees/SUBMIT_REQUEST",
    payload: {
      nome: employees.inputValue,
      departamento:
        employees.selectValue.length === 0
          ? employees.selectValue[0].value
          : employees.selectValue.map(e => e.value).join(", ")
    }
  };
};
export const submitEmployeesSuccess = data => {
  return {
    type: "@employees/SUBMIT_SUCCESS",
    payload: {
      nome: data.inputValue,
      departamento: data.selectValue
    }
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
