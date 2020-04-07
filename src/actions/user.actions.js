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