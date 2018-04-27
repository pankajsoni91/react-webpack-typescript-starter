import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, IAppState } from 'redux/reducers';
import reduxSaga from 'redux-saga';
import { rootSaga } from '../saga';

export default function configureStore(initialState?: IAppState) {
  const sagaMiddleware = reduxSaga();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
