import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "../src/redux/store"
import CakeContainer from "./componets/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
