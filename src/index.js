import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Router from './Router';
import rootReducer from './store/rootReducer';

import registerServiceWorker from './registerServiceWorker';
import config from './config';

global.config = config;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider {...{store}}>
    <Router />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
