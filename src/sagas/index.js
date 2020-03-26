import { fork } from 'redux-saga/effects';
import {watchUserAuthentication, watchImageSubmission } from './watchers';


export default function* root() {
    yield fork(watchUserAuthentication);
    yield fork(watchImageSubmission);
}