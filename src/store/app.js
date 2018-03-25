
import { createReducer } from 'reduxsauce';
import { Types } from '../actions/app';

export const INITIAL_STATE = {
  status: false
};

export const toggleStatus = (state = INITIAL_STATE, action) => ({
  ...state,
  status: !state.status
});

export const HANDLERS = {
  [Types.TOGGLE_STATUS]: toggleStatus
};

export default createReducer(INITIAL_STATE, HANDLERS);
