import INITIAL_STATE from "./store";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@moviments/SUBMIT_SUCCESS":
      return {
        ...state
      };
    case "@moviments/SUBMIT_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          ...action.error
        }
      };
    case "@moviments/SEARCH_SUCCESS":
      return {
        ...state,
        moviments: action.payload
      };
    case "@moviments/SEARCH_ERROR":
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
