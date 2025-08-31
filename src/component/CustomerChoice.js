import { connect } from "react-redux";
import { orderBurger } from "./redux";
import { useState } from "react";

const CustomerChoice = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div className="container">
      <h2 className="text">
        Number of Buger Buns Available - {props.burgersBuns}
      </h2>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button className="btn" onClick={()=>props.orderBurger(number)}>
        Order Pizza
      </button>
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
    orderBurger: (number) => dispatch(orderBurger(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerChoice);
