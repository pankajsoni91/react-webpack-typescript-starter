import * as React from 'react';
import { render } from 'react-dom';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  rootEl,
);
