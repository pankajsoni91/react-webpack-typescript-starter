import { actionCreator, apiTypeCreator } from '../../utils/reducer';

const PREFIX_DASHBOARD = 'DASHBOARD';
const types = {
  ...apiTypeCreator(PREFIX_DASHBOARD),
};

const INITIAL_STATE = {
  loading: false,
  data: undefined,
  error: null,
};

const reducer = (state: any = INITIAL_STATE, action: { type: string; payload: any }): any => {
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

export default reducer;
export { actions, types, PREFIX_DASHBOARD };
export type IReducerState = any;
