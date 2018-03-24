import configureStore from 'redux-mock-store';

import { TOGGLE_STATUS } from './appReducer';

const middlewares = []
const mockStore = configureStore(middlewares);

describe('appReducer', () => {

  describe('TOGGLE_STATUS', () => {

    it('should toggle status', () => {

      const store = mockStore();
      store.dispatch({ type: TOGGLE_STATUS });

      expect(store.getActions()).toEqual([{ type: TOGGLE_STATUS }]);

    });

  });

});
