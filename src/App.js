import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCreamContainer from "./components/IceCreamContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIceContainers from "./components/HookIceContainers";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <HookIceContainers />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
