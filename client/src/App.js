import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Profile from './components/auth/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import Directory from './components/layout/Directory';
import CreateProfile from './components/profile-forms/CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';

// Redux
import store from './store';
import { loadUser } from './actions/user';
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
        <Route exact path="/register" component={Register} />
        <Route exact path="/directory" component={Directory} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
      </section>
    </div>
  );
}

export default App;
