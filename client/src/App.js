import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Profile from './components/auth/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import Directory from './components/layout/Directory';
import PrivateRoute from './components/routing/PrivateRoute';

// Redux
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="ui container">
      <Navbar />
      <Alert />
        <Route exact path="/" component={Landing} />
      <section className="container">
        <Route exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/directory" component={Directory} />
      </section>
    </div>
  );
}

export default App;
