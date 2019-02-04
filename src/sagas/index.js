import { fork } from 'redux-saga/effects';
import watchAllEmployee from './watcher';

export default function* startEmployeeSearch() {
    yield fork(watchAllEmployee);
}


