import { combineReducers } from 'redux';
import {pictureSubmit, isPending} from '../reducers/reducers';
import login from './loginReducer';
import register from './registerReducer';

const rootReducer = combineReducers({
    pictureSubmit,
    isPending,
    login,
    register

});

export default rootReducer;