import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import config from './config';

console.log(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
