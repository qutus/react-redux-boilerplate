import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';

import appReducer from './reducers/app';
import userSaga from './sagas/user';

const reducers = combineReducers({
  app: appReducer
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

function* rootSaga() {
  yield ([
    fork(userSaga)
  ])
}
sagaMiddleware.run(rootSaga);

export default store;
