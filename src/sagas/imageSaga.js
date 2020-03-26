import { put, call,select} from 'redux-saga/effects';
import {IMAGE_SUBMIT_SUCCESS, IMAGE_SUBMIT_FAILED} from '../constants/constants';
import {faceRecognitionService, updateImageService} from '../services/faceRecognitionService';

export function* imageSaga(payload){
    const respone = yield call(faceRecognitionService,payload);
    if(respone.ok){
        yield put({type: IMAGE_SUBMIT_SUCCESS, respone});
        const userId = yield select();
        console.log(userId);
        yield put(updateImageService(userId));
    }else{
        yield put({type:IMAGE_SUBMIT_FAILED,
        respone})
    }
}