import { put, call } from 'redux-saga/effects';
import { PROFILE_TOGGLE } from '../constants/user.constants';
import { updateProfileService } from '../services/profileService';

export function* profileSaga(payload) {
    try {
        const response = yield call(updateProfileService, payload);
        if (response.status === 200 || response.status === 304) {
            yield put({ type: PROFILE_TOGGLE });
            // this.props.loadUser({ ...this.props.user, ...data })
        }
        else {
            alert('There was an error trying to update your profile');
        }
    }
    catch (err) {
        // alert('There was an error trying to update your profile');
    }
}