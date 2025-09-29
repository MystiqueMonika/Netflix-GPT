import { Provider, useDispatch } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";


const App = () => {

  return (
    <Provider store={appStore}>
      <div className="text-sm">
        <Body />
      </div>
    </Provider>
  );
};

export default App;
