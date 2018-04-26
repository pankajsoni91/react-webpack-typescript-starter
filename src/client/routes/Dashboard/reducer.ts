import { actionCreator, apiTypeCreator, IActionCreatorType , IAPI } from 'client/utils/reducer';
const PREFIX_DASHBOARD = 'DASHBOARD';
const types = {
  ...apiTypeCreator(PREFIX_DASHBOARD),
};

// TODO - need to check the possible value to replace any
export interface IDashboardData {
  testData: string;
}

const INITIAL_STATE: IAPI<IDashboardData> = {
  loading: false,
  data: undefined,
  error: null,
};

const reducer = (state: IAPI<IDashboardData> = INITIAL_STATE,
                 action: IActionCreatorType<object|string>): IAPI<IDashboardData> => {
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
export type IReducerState  = IAPI<IDashboardData>;
