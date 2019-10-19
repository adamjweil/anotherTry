import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import history from "./history";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { createBrowserHistory } from "history";
export const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
