import * as React from 'react';
import { render } from 'react-dom';
import App from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

const rootEl = document.getElementById('root');

render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootEl
);
