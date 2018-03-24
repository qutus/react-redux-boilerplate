import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route component={({location}) => (<h1>404 NOT FOUND - {location.pathname}</h1>)} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
