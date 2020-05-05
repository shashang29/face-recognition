import { takeLatest, takeLeading } from 'redux-saga/effects';
import { sigininSaga, registerSaga, getUserDataSaga } from './authenticationSaga';
import { imageSaga } from './imageSaga';
import { profileSaga } from './profileSaga';
import { userConstants } from '../constants/userAuth.constants';
import { SUBMIT_IMAGE, SUBMIT_PROFILE_UPDATE } from '../constants/user.constants';

export function* watchUserAuthentication() {
  yield takeLatest(userConstants.REGISTER_REQUEST, registerSaga);
  yield takeLatest(userConstants.SIGNIN_REQUEST, sigininSaga);
  yield takeLatest(userConstants.GET_USER_DATA, getUserDataSaga);

}

export function* watchImageSubmission() {
  yield takeLeading(SUBMIT_IMAGE, imageSaga);
}

export function* watchProfileUpdate() {
  yield takeLatest(SUBMIT_PROFILE_UPDATE, profileSaga);
}