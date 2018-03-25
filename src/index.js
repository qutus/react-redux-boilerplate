import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './components/Router';
import store from './store';

import registerServiceWorker from './registerServiceWorker';
import config from './config';

global.config = config;

ReactDOM.render(
  <Provider {...{store}}>
    <Router />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
