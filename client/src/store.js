import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { loadUser } from "./actions/auth";
import { routerMiddleware, push } from "react-router-redux";

const initialState = {};

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({
  // loadUser,
  trace: true,
  traceLimit: 25
});
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
