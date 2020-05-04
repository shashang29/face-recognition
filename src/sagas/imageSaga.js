import { put, call, select, all } from 'redux-saga/effects';
import {
    FETCH_IMAGE_DATA_SUCCESS, FETCH_IMAGE_DATA_FAILED,
    UPDATE_IMAGE_COUNT,
    DISPLAY_FACE_DATA,
    NO_FACE_DETECTED
} from '../constants/user.constants'
import { faceRecognitionService, updateImageService, calculateFaceLocationService } from '../services/faceRecognitionService';

export function* imageSaga(payload) {
    try {
        const respone = yield call(faceRecognitionService, payload);
        yield put({ type: FETCH_IMAGE_DATA_SUCCESS });
        const { login: { user: { id } } } = yield select();
        if (respone.outputs[0].data.regions) {
            const { updatedCount, faceboxes } = yield all({
                updatedCount: call(updateImageService, id),
                faceboxes: call(calculateFaceLocationService, respone)
            });
            yield put({ type: DISPLAY_FACE_DATA, payload: faceboxes });
            yield put({ type: UPDATE_IMAGE_COUNT, payload: updatedCount });
        }
        else {
            yield put({ type: NO_FACE_DETECTED })
        }
    }
    catch (err) {
        console.log(err)
        yield put({
            type: FETCH_IMAGE_DATA_FAILED
        })
    }

}