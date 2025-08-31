import { ORDER_BURGER } from "./BurgerTypes";

const initialState = { burgersBuns: 10 };

const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state,
        burgersBuns: state.burgersBuns - action.payload,
      };
    default:
      return state;
  }
};

export default burgerReducer;
