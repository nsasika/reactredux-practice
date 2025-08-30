import { connect } from "react-redux";
import { orderPizza } from "./redux";

const PizzaBox = (props) => {
  console.log("Props:", props);
  return (
    <div className="container">
      <h2 className="text">Number of Pizza Base Available - {props.pizzaBase}</h2>
      <button className="btn" onClick={props.orderPizza}>Order Pizza</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzaBase: state.pizzaBase,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza: () => dispatch(orderPizza()),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PizzaBox);
