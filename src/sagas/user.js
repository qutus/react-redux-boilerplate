import { call, put, takeLatest } from 'redux-saga/effects';

import { $fetchUsers } from '../api/users';
import { Creators } from '../actions/user';

function* fetchUsers(action) {

  const response = yield call($fetchUsers, action.usersLength);
  yield put(Creators.setUsers(response.data.results));

}

function* userSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default userSaga;
