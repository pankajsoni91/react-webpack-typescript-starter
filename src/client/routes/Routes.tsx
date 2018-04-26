import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Nav } from 'components/Nav';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <Nav>
        <li>
          <NavLink exact={true} to='/' activeClassName='active'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName='active'>About</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink>
        </li>
      </Nav>
      <hr />
      <Route exact path='/' render={props => <Home />} />
      <Route exact path='/about' render={props => <About />} />
      <Route exact path='/dashboard' render={props => <Dashboard counter={10}/>} />
    </div>
  );
};

export default hot(module)(App);

