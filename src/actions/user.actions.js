import { userConstants } from '../constants/user.constants';


export const loginUserAction = (email,password) => {
    return {
        type: userConstants.SIGNIN_REQUEST,
        email,
        password
    }
};

export const registerUserAction = (userData) => {
    return {
        type: userConstants.REGISTER_REQUEST,
        userData
    }
};