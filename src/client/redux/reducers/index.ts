import { combineReducers } from 'redux';
import {
  reducer as dashboardReducer,
  IReducerState as IDashboardReducerState,
} from 'client/routes/Dashboard/reducer';

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export interface IAppState {
  dashboard: IDashboardReducerState;
}
