export const TOGGLE_STATUS = 'TOGGLE_STATUS';

const initialState = {
  status: false
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {

    case TOGGLE_STATUS:
      return {
        status: !state.status
      };

    default:
      return state;
  }
};

export default appReducer;
