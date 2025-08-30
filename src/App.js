import "./App.css";
import PizzaBox from "./component/PizzaBox";
import { Provider } from "react-redux";
import store from "./component/store";

function App() {
  return (
    <Provider store={store}>
      <PizzaBox />
    </Provider>
  );
}

export default App;
