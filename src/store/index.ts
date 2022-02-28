import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {
    loader,
    cardVisiibility,
    cardDetails
} from "./reducers";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    loader,
    cardVisiibility,
    cardDetails
  }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store;
