import { all } from 'redux-saga/effects';
import { fetchDashboard } from './fetch-dashboard';

export default function* rootSaga() {
  yield all([
    fetchDashboard()
  ]);
}
