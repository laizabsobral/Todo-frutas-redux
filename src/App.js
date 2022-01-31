import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import Routers from "./routers";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routers />
      </PersistGate>
    </Provider>
  );
};
export default App;
