import { all } from 'redux-saga/effects';
import { fetchDashboard } from './fetch-dashboard';

export const rootSaga =  function* () {
  yield all([
    fetchDashboard(),
  ]);
}
