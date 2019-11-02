import INITIAL_STATE from "./store";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@departament/SUBMIT_SUCCESS":
      return {
        ...state
      };
    case "@departament/SUBMIT_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          ...action.error
        }
      };
    case "@departament/SEARCH_SUCCESS":
      return {
        ...state,
        departament: action.payload
      };
    case "@departament/SEARCH_ERROR":
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
