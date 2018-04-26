import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, IAppState } from 'client/redux/reducers';

export default function configureStore(initialState?: IAppState) {
  const store = createStore(rootReducer, initialState);
  return store;
}
