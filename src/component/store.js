import { createStore } from "redux";
import PizzaReducer from "./redux/pizza/PizzaReducer";


const store = createStore(PizzaReducer);

export default store;

