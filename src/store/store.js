import rootReducer from '../reducers/rootReducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(mySaga);

export default store;