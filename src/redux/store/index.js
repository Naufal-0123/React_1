import { combineReducers, legacy_createStore as createStore, compose, applyMiddleware, } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../reducer/countReducer";
import { authProses } from "../reducer/authReducer";
import { colorReducer } from "../reducer/colorReducer";

const allReducers = combineReducers({
  count: reducer,
  color: colorReducer,
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
