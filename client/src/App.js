import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import { Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';

// Reducx
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import { Message } from 'semantic-ui-react';
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
      <h1>My App</h1>
      <Alert />
        <Route exact path="/" component={Landing} />
      <section className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </section>
    </div>
  );
}

export default App;
