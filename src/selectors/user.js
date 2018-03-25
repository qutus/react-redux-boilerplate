import { createSelector } from 'reselect'

const _usersSelector = state => state.app._users
const usersEntitySelector = state => state.entity.users

export const usersSelector = createSelector(
  [_usersSelector, usersEntitySelector],
  (_users, usersEntity) => _users.map(_user => usersEntity[_user])
);
