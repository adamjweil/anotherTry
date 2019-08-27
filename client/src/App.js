import React from 'react';
import Navbar from './components/layout/Navbar';
import { Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';


function App() {
  return (
    <div className="ui container">
      <Navbar />
      <h1>My App</h1>
        <Route exact path="/" component={Landing} />
      <section className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </section>
    </div>
  );
}

export default App;
