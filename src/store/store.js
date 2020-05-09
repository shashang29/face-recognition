import rootReducer from '../reducers/rootReducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middleware = [...middleware, logger]
}

const store = createStore(rootReducer, applyMiddleware(...middleware));


sagaMiddleware.run(mySaga);

export default store;