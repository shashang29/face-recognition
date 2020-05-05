import { put, call } from 'redux-saga/effects';
import { PROFILE_TOGGLE, UPDATE_PROFILE } from '../constants/user.constants';
import { updateProfileService } from '../services/profileService';

export function* profileSaga({ userData }) {
    console.log(userData)
    try {
        const response = yield call(updateProfileService, userData);
        console.log(response)
        if (response.status === 200 || response.status === 304) {
            yield put({ type: PROFILE_TOGGLE });
            yield put({ type: UPDATE_PROFILE, userData })
        }
        else {
            alert('There was an error trying to update your profile');
        }
    }
    catch (err) {
        alert('There was an error trying to update your profile');
    }
}