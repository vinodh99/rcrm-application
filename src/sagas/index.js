import {fork} from 'redux-saga/effects';
import watchSearchEmployee from './watcher';

export default function* startEmployeeSearch(){
    yield fork(watchSearchEmployee);
}

