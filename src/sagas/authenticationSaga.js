import { put, call } from 'redux-saga/effects';
import { loginAuthentication, registerUserService, getUserData } from '../services/authenticationService';
import { userConstants } from '../constants/userAuth.constants';
import { PENDING } from '../constants/constants';

export function* loginSaga(payload) {

    const response = yield call(loginAuthentication, payload);
    const token = window.sessionStorage.getItem('token');
    console.log(response)
    if (response.userId) {
        yield put({ type: userConstants.SIGNIN_SUCCESS, response });
        if (!token) {
            window.sessionStorage.setItem('token', response.token);
        }
        const userData = yield call(getUserData, response.userId)
        if (userData.email) {
           
            yield put({ type: PENDING, payload: false })
        }
    }
    else {
        yield put({ type: userConstants.SIGNIN_FAILED, response })
        yield put({ type: PENDING, payload: false })
    }
}


export function* registerSaga(payload) {
    const response = yield call(registerUserService, payload);
    if (response.id) {
        yield put({ type: userConstants.REGISTER_SUCCESS, payload })
        yield put({ type: PENDING, payload: false })
    } else {
        yield put({ type: userConstants.REGISTER_FAILED, payload })
        yield put({ type: PENDING, payload: false })
    }
}
