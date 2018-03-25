
import { createReducer } from 'reduxsauce';
import { Types as entityTypes } from '../actions/entity';

export const INITIAL_STATE = {
  users: {}
};

export const mergeUsers = (state = INITIAL_STATE, action) => ({
  ...state,
  users: {
    ...state.users,
    ...action.users
  }
});

export const HANDLERS = {
  [entityTypes.MERGE_USERS]: mergeUsers
};

export default createReducer(INITIAL_STATE, HANDLERS);
