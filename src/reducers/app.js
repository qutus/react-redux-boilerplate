
import { createReducer } from 'reduxsauce';
import { Types as appTypes } from '../actions/app';
import { Types as usersTypes } from '../actions/user';

export const INITIAL_STATE = {
  status: false,
  users: []
};

export const toggleStatus = (state = INITIAL_STATE, action) => ({
  ...state,
  status: !state.status
});

export const setUsers = (state = INITIAL_STATE, action) => ({
  ...state,
  users: [...state.users, ...action.users]
});

export const HANDLERS = {
  [appTypes.TOGGLE_STATUS]: toggleStatus,
  [usersTypes.SET_USERS]: setUsers
};

export default createReducer(INITIAL_STATE, HANDLERS);
