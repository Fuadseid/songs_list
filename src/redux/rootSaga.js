import { all } from 'redux-saga/effects';
import { watchFetchUsers } from '../redux/sagas/Saga';

export default function* rootSaga() {
  yield all([watchFetchUsers()]);
}
