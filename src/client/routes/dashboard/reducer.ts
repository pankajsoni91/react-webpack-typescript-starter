import { actionCreator, apiTypeCreator } from '../../utils/reducer';
import { IAction } from '../../utils/types';
const PREFIX_DASHBOARD = 'DASHBOARD';
const types = {
  ...apiTypeCreator(PREFIX_DASHBOARD),
};

// TODO - need to check the possible value to replace any
export interface IReducerState {
  loading: boolean,
  data: any,
  error: any,
}

const INITIAL_STATE = {
  loading: false,
  data: undefined,
  error: null,
};

const reducer = (state: IReducerState = INITIAL_STATE, action: IAction): IReducerState => {
  const { type } = action;

  switch (type) {
    case types[PREFIX_DASHBOARD].FETCH: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

const actions = {
  fetch: actionCreator(types[PREFIX_DASHBOARD].FETCH),
  success: actionCreator(types[PREFIX_DASHBOARD].SUCCESS),
  error: actionCreator(types[PREFIX_DASHBOARD].ERROR),
};

export { actions, types, PREFIX_DASHBOARD , reducer };
