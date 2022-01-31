import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import DefaultReducers from './reducers';

const persistConfig = {
    key: "root",
    storage
}

const persistedReducers = persistReducer(persistConfig, DefaultReducers);

const store = createStore(persistedReducers);
const persistor = persistStore(store);

export {store, persistor};