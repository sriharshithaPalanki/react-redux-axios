import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import Details from "./components/Details/Details";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Details />
      </div>
    </Provider>
  );
}

export default App;
