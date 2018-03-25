import configureStore from 'redux-mock-store';

import { Types, Creators } from '../actions/app';
import { TOGGLE_STATUS } from './app';

const middlewares = []
const mockStore = configureStore(middlewares);

describe('app reducer', () => {

  describe('TOGGLE_STATUS', () => {

    it('should toggle status', () => {

      const store = mockStore();
      store.dispatch(Creators.toggleStatus());

      expect(store.getActions()).toEqual([{ type: Types.TOGGLE_STATUS }]);

    });

  });

});
