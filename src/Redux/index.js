import { combineReducers, legacy_createStore as createStore, compose, applyMiddleware, } from "redux";
import thunk from "redux-thunk";
import { authProses } from "./reducer";
// import { authProses } from "../API/auth";

const allReducers = combineReducers({
  authProses: authProses
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//Membuat store
export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);