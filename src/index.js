import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import config from './config';

global.config = config;

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
