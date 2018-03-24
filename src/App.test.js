import React from 'React';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {

  describe('* render', () => {

    it('Should render App', () => {

      const wrapper = shallow(<App />);
      expect(wrapper.find('div')).toBeTruthy();

    });

  });

});
