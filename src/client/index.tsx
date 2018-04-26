import * as React from 'react';
import { render } from 'react-dom';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  rootEl,
);
