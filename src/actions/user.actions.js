import { userConstants } from '../constants/userAuth.constants';


export const loginUserAction = (email,password) => {
    return {
        type: userConstants.SIGNIN_REQUEST,
        email,
        password
    }
};

export const getUserData =(userID)=>{
    return{
        type: userConstants.GET_USER_DATA,
        userID
    }
};

export const registerUserAction = (userData) => {
    return {
        type: userConstants.REGISTER_REQUEST,
        userData
    }
};