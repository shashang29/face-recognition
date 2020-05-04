import { combineReducers } from 'redux';

import { imageInput, isPending, toggleProfile } from './userReducers';
import login from './authReducers';
import register from './registerReducer';


const rootReducer = combineReducers({
    imageInput,
    login,
    register,
    toggleProfile

});

export default rootReducer;