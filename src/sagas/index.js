import { fork } from 'redux-saga/effects';
import { watchUserAuthentication, watchImageSubmission, watchProfileUpdate } from './watchers';


export default function* root() {
    yield fork(watchUserAuthentication);
    yield fork(watchImageSubmission);
    yield fork(watchProfileUpdate);
}