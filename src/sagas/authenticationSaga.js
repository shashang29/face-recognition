import { put, call } from 'redux-saga/effects';

import { loginUserService, registerUserService, sessionService } from '../services/authenticationService';
import { userConstants } from '../constants/userAuth.constants';
import { signInSuccess, signInFailed } from '../actions/userAuth.actions';

export function* sigininSaga({ payload }) {
    try {
        const response = yield call(loginUserService, payload);
        if (response.id) {
            yield put(signInSuccess(response));
        }
        else {
            yield put(signInFailed(response))
        }
    } catch (error) {
        console.log(error)
        yield put(signInFailed(error.message))
    }
}

export function* getUserDataSaga({ payload }) {
    try {
        const response = yield call(sessionService, payload)
        if (response.id) {
            yield put(signInSuccess(response));
        }
    } catch (error) {
        console.log(error)
        yield put(signInFailed(error.message))
    }
}

export function* registerSaga(payload) {
    const response = yield call(registerUserService, payload);
    if (response.id) {
        yield put({ type: userConstants.REGISTER_SUCCESS, payload })
    } else {
        yield put({ type: userConstants.REGISTER_FAILED, payload })
    }
}
