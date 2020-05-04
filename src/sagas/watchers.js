import { takeLatest } from 'redux-saga/effects';
import { sigininSaga, registerSaga, getUserDataSaga } from './authenticationSaga';
import { imageSaga } from './imageSaga';
import { userConstants } from '../constants/userAuth.constants';
import { SUBMIT_IMAGE } from '../constants/user.constants';

export function* watchUserAuthentication() {
  yield takeLatest(userConstants.REGISTER_REQUEST, registerSaga);
  yield takeLatest(userConstants.SIGNIN_REQUEST, sigininSaga);
  yield takeLatest(userConstants.GET_USER_DATA, getUserDataSaga);

}

export function* watchImageSubmission() {
  yield takeLatest(SUBMIT_IMAGE, imageSaga);
}