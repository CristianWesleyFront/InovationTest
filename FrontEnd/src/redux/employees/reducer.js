import INITIAL_STATE from "./store";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@employees/SUBMIT_SUCCESS":
      console.log(action.payload);
      return {
        ...state
      };
    case "@employees/SUBMIT_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          ...action.error
        }
      };
    case "@employees/SEARCH_SUCCESS":
      return {
        ...state,
        employees: action.payload
      };
    case "@employees/SEARCH_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          ...action.error
        }
      };

    default:
      return state;
  }
};
