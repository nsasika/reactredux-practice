import "./App.css";
//import PizzaBox from "./component/PizzaBox";
import { Provider } from "react-redux";
import store from "./component/store";
import HooksContainer from "./component/HooksContainer";

function App() {
  return (
    <Provider store={store}>
      {/* <PizzaBox /> */}
      <HooksContainer/>
    </Provider>
  );
}

export default App;
