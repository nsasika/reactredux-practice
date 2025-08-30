import { connect } from "react-redux";
import { orderBurger } from "./redux";

const BurgerBox = (props) => {
  return (
    <div className="container">
      <h2 className="text">Number of Buger Buns Available - {props.burgersBuns}</h2>
      <button className="btn" onClick={props.orderBurger}>Order Pizza</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    burgersBuns: state.burger.burgersBuns,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    orderBurger: () => dispatch(orderBurger()),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBox);
