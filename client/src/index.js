import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import history from "./history";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { createBrowserHistory } from "history";

export const browserHistory = createBrowserHistory();

const cache = new InMemoryCache();
const BASE_URL = "http://localhost:3000";

const httpLink = new HttpLink({
  uri: BASE_URL,
  headers: {
    content_type: "Application/json"
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <App />
        </MuiPickersUtilsProvider>
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
