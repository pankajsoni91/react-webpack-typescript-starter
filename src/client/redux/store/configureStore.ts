import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, IAppState } from 'client/redux/reducers';

// #TODO - need to remove any
export default function configureStore(initialState?: any) {
  const store = createStore(rootReducer, initialState);
  return store;
}
