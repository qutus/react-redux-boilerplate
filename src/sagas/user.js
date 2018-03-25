import { call, put, takeLatest } from 'redux-saga/effects';

import { $fetchUsers } from '../api/users';
import { Creators as userCreators } from '../actions/user';
import { Creators as entityCreators } from '../actions/entity';
import { normalizeUser } from '../schemas/user';

function* fetchUsers(action) {

  const response = yield call($fetchUsers, action.usersLength);
  
  const { entities, result } = normalizeUser(response.data.results);

  yield put(entityCreators.mergeUsers(entities.users));
  yield put(userCreators.setUsers(result));

}

function* userSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default userSaga;
