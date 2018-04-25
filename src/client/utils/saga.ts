import { put, call } from 'redux-saga/effects';
export function apiCaller<K, F>(
  api: (k: K) => Promise<F>,
  success: Function,
  failure: Function,
) {
  return function*(...args: any[]) {
    try {
      const result = yield call(
        api,
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
      );
      if (success) {
        yield put(success(result));
      } else {
        return result;
      }
    } catch (error) {
      if (failure) {
        yield put(failure(error));
      } else {
        throw error;
      }
    }
  };
}
