import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.register();
