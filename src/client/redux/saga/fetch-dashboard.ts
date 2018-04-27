import { PREFIX_DASHBOARD, types, actions } from 'routes/Dashboard/reducer';
import { takeLatest, select } from 'redux-saga/effects';
import { apiCaller } from 'utils/saga';
import { getDashboardData } from 'services/dashboard';

function* worker() {
  yield apiCaller(getDashboardData, actions.success, actions.error)();
}

export function* fetchDashboard() {
  yield takeLatest(types[PREFIX_DASHBOARD].FETCH, worker);
}
