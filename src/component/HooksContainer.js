import { useSelector, useDispatch } from "react-redux";
import { orderPizza } from "./redux";

const HooksContainer = () => {
  const pizzaBase = useSelector((state) => state.pizza.pizzaBase);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2 className="text">Number of Pizza Base Available - {pizzaBase}</h2>
      <button className="btn" onClick={() => dispatch(orderPizza())}>
        Order Pizza
      </button>
    </div>
  );
};

export default HooksContainer;
