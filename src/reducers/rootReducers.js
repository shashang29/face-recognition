import { combineReducers } from 'redux';
import {imageInput, isPending} from '../reducers/reducers';
import login from './loginReducer';
import register from './registerReducer';

const rootReducer = combineReducers({
    imageInput,
    isPending,
    login,
    register

});

export default rootReducer;