import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-dom';

import { loginUserService, registerUserService, getUserData } from '../services/authenticationService';
import { userConstants } from '../constants/userAuth.constants';
import { PENDING } from '../constants/constants';

export function* loginSaga(action) {
    const response = yield call(loginUserService, action);
    const { history } = action;
    if (response.id) {
        yield put({ type: userConstants.SIGNIN_SUCCESS, response });
        yield put({ type: PENDING, payload: false });
        history.push('/dashboard');
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
