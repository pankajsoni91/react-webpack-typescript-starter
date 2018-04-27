import { combineReducers } from 'redux';
import {
  reducer as dashboardReducer,
  IState as IDashboardReducerState
} from 'routes/Dashboard/reducer';

export const rootReducer = combineReducers({
  dashboard: dashboardReducer
});

export interface IAppState {
  dashboard: IDashboardReducerState;
}
