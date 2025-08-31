import axios from "axios";
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductTypes";

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

const fetchSuccess = (products) => {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
};

const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};

// returning a function from an action creator when using redux-thunk middleware
const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        const products = res.data;
        dispatch(fetchSuccess(products));
      })
      .catch((err) => {
        const errMsg = err.message; 
        dispatch(fetchError(errMsg));
      });
  };
};

export { fetchRequest, fetchSuccess, fetchError, fetchProducts };
