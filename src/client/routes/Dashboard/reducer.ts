import { actionCreator, apiTypeCreator, IActionCreatorType , IAPI } from '../../utils/reducer';
const PREFIX_DASHBOARD = 'DASHBOARD';
const types = {
  ...apiTypeCreator(PREFIX_DASHBOARD),
};

// TODO - need to check the possible value to replace any
export interface IDashboardData {
  value: string
}

const INITIAL_STATE: IAPI<IDashboardData> = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state: IAPI<IDashboardData> = INITIAL_STATE, action: IActionCreatorType<object|IDashboardData>): IAPI<IDashboardData> => {
  const { type , payload } = action;

  switch (type) {
    case types[PREFIX_DASHBOARD].FETCH: {
      return {
        ...state,
        loading: true,
      };
    }

    case types[PREFIX_DASHBOARD].SUCCESS: {
      return {
        ...state,
        loading: false,
        data: <IDashboardData>payload,
      };
    }

    case types[PREFIX_DASHBOARD].ERROR: {
      return {
        ...state,
        error: payload,
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
export type IReducerState  = IAPI<IDashboardData>;
