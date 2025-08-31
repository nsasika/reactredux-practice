import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductTypes";

const initialState = {
  loading: false,
  products: [],
  error: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        products: action.payload
      };
    case FETCH_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
