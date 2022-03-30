import { GET_USER, REQUEST_FAIL } from "./detailsTypes";

const initialState = {
  details: {},
  error: "",
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        details: action.payload,
      };
    case REQUEST_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailsReducer;
