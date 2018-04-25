import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { IAppState } from '../reducers';
import rootSaga  from '../saga';


// #TODO - need to remove any
export default function configureStore(initialState?: any) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}
