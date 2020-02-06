import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store;