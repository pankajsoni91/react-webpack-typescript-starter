import { combineReducers } from 'redux';
import {
  reducer as dashboardReducer,
  IReducerState as IDashboardReducerState,
} from '../../routes/dashboard/reducer';

export default combineReducers({
  dashboard: dashboardReducer,
});

export interface IAppState {
  dashboard: IDashboardReducerState;
}
