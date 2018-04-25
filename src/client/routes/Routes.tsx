import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from './home';
import About from './about';
import Dashboard from './dashboard';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" render={props => <Home />} />
      <Route exact path="/about" render={props => <About />} />
      <Route exact path="/dashboard" render={props => <Dashboard />} />
    </div>
  );
};

export default hot(module)(App);

