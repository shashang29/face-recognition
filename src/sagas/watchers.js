import { takeLatest } from 'redux-saga/effects';
import { loginSaga, registerSaga } from './authenticationSaga';

import { userConstants } from '../constants/user.constants';


export default function* watchUserAuthentication() {
  yield takeLatest(userConstants.REGISTER_REQUEST, registerSaga);
  yield takeLatest(userConstants.SIGNIN_REQUEST, loginSaga);
}