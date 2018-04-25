import { actionCreator, apiTypeCreator } from '../../utils/reducer';

const PREFIX_TEST = 'TEST';
const types = {
  ...apiTypeCreator(PREFIX_TEST),
};

const INITIAL_STATE = {
  loading: false,
  data: undefined,
  error: null,
};

const reducer = (state: any = INITIAL_STATE, action: { type: string; payload: any }): any => {
  const { type } = action;

  switch (type) {
    case types[PREFIX_TEST].FETCH: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

const actions = {
  fetch: actionCreator(types[PREFIX_TEST].FETCH),
  success: actionCreator(types[PREFIX_TEST].SUCCESS),
  error: actionCreator(types[PREFIX_TEST].ERROR),
};

export default reducer;
export { actions, types, PREFIX_TEST };
export type IReducerState = any;
