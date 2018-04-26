import { PREFIX_DASHBOARD, types, actions } from 'client/routes/dashboard/reducer';
import { takeLatest, select } from 'redux-saga/effects';
import { apiCaller } from 'client/utils/saga';
import { getDashboardData } from 'client/services/dashboard';

function* worker() {
  console.log('saga called');
  yield apiCaller(getDashboardData, actions.success, actions.error)();
}

export function* fetchDashboard() {
  yield takeLatest(types[PREFIX_DASHBOARD].FETCH, worker);
}
