import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from './reducers/rootReducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './index.css';

const logger = createLogger();
const store = createStore(rootReducer, 
    applyMiddleware
    (thunkMiddleware,logger));

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

serviceWorker.register();
