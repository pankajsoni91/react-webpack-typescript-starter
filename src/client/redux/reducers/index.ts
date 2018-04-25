import { combineReducers } from 'redux';
import reducer, {
  IReducerState as ITestReducerState,
} from '../../routes/test/reducer';

export default combineReducers({
  reducer,
});

export interface IAppState {
  test: ITestReducerState;
}
