import * as React from 'react';
import { render } from 'react-dom';
import App from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';

const rootEl = document.getElementById('root');

render(
  <Provider store={store()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootEl
);
