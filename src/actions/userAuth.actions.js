import { userConstants } from '../constants/userAuth.constants';


export const loginUserRequest = (emailAndPassword) => {
    return {
        type: userConstants.SIGNIN_REQUEST,
        payload: emailAndPassword
    }
};

export const signInSuccess = user => ({
    type: userConstants.SIGNIN_SUCCESS,
    payload: user
});


export const signInFailed = error => ({
    type: userConstants.SIGNIN_FAILED,
    payload: error
});

export const resetError = () => ({
    type: userConstants.RESET_SIGNIN_ERROR
});

export const getUserData = (token) => {
    return {
        type: userConstants.GET_USER_DATA,
        payload: token
    }
};

export const registerUserAction = (userData) => {
    return {
        type: userConstants.REGISTER_REQUEST,
        userData
    }
};

export const registerReset = () => {
    return {
        type: userConstants.REGISTER_RESET
    }
};

export const signOut = () => {
    return {
        type: userConstants.SIGN_OUT
    }
}