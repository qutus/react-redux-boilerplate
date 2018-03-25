import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  fetchUsers: ['usersLength'],
  setUsers: ['users']
});
