import { PREFIX_DASHBOARD, types, actions } from '../../routes/dashboard/reducer';
import { takeLatest } from 'redux-saga/effects';
import { apiCaller } from '../../utils/saga';
import { getDashboardData }  from '../../servcies/dashboard';

function* worker() {
  console.log('saga called');
  yield apiCaller(getDashboardData, actions.success, actions.error)();
}

export function* fetchDashboard() {
  yield takeLatest(types[PREFIX_DASHBOARD].FETCH, worker);
}
