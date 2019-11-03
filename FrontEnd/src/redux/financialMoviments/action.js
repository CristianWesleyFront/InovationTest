export const submitMovimentsRequest = moviments => {
  const {
    employeeValue,
    descriptionValue,
    movimentValue,
    departamentSelect
  } = moviments;
  return {
    type: "@moviments/SUBMIT_REQUEST",
    payload: {
      descricao: descriptionValue,
      funcionario: {
        nome: employeeValue.value,
        departamento: departamentSelect.value
      },
      valor: `${parseFloat(movimentValue, 10).toFixed(2)}`
    }
  };
};
export const submitMovimentsSuccess = data => {
  return {
    type: "@moviments/SUBMIT_SUCCESS",
    payload: data
  };
};
export const submitMovimentsError = error => {
  return {
    type: "@moviments/SUBMIT_ERROR",
    error
  };
};
export const searchMovimentsRequest = () => {
  return {
    type: "@moviments/SEARCH_REQUEST"
  };
};
export const searchMovimentsSuccess = data => {
  return {
    type: "@moviments/SEARCH_SUCCESS",
    payload: data
  };
};
export const searchMovimentsError = error => {
  return {
    type: "@moviments/SEARCH_ERROR",
    error
  };
};
