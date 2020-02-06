import { all } from 'redux-saga/effects';
import actionWatcher from './news';
import loginWatcher from './login';

export default function* rootSaga() {
  yield all([
    actionWatcher(),
    loginWatcher()
  ]);
}

// use them in parallel
// export default function* rootSaga() {
//   yield takeEvery('FETCH_USERS', fetchUsers)
//   yield takeEvery('CREATE_USER', createUser)
// }