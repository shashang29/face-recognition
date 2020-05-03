import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { imageInput, isPending } from '../reducers/reducers';
import login from './loginReducer';
import register from './registerReducer';


const rootReducer = combineReducers({
    imageInput,
    login,
    register

});

export default rootReducer;