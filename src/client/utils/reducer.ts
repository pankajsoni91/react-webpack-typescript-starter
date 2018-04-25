export interface IAPI<T> {
  loading: boolean;
  error: boolean | object;
  data: T | null;
}

export interface IActionCreatorType<T> {
  type: string;
  payload?: T;
}

export function actionCreator<T>(type: string) {
  return (payload?: T) => ({
    type,
    payload,
  });
}

export const apiTypeCreator = (type: string) => ({
  [type]: {
    FETCH: `${type}_FETCH`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
  },
});
