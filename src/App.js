import "./App.css";
import PizzaBox from "./component/PizzaBox";
import BurgerBox from "./component/BurgerBox";
import { Provider } from "react-redux";
import store from "./component/store";
import CustomerChoice from "./component/CustomerChoice";
import ProductsContainer from "./component/ProductsContainer";
//import HooksContainer from "./component/HooksContainer";

function App() {
  return (
    <Provider store={store}>
      {/* <PizzaBox />
      <BurgerBox />
      <CustomerChoice /> */}
      {/* <HooksContainer/> */}
      <ProductsContainer/>
    </Provider>
  );
}

export default App;
