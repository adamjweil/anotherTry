import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import history from "./history";

ReactDOM.render(
  <Provider store={store} history={history}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
