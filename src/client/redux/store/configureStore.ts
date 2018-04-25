import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { IAppState } from '../reducers';

// #TODO - need to remove any
export default function configureStore(initialState?: any) {
  const store = createStore(rootReducer, initialState);
  return store;
}
