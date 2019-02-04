import { takeLatest } from 'redux-saga/effects';
import { searchEmployeeSaga, allEmployeesSaga, postDataSaga } from './EmployeeSaga';
import * as types from '../constants/actionTypes';



export default function* watchAllEmployee() {
    yield takeLatest(types.ALL_EMPLOYEES, allEmployeesSaga)
    yield takeLatest(types.POST_DATA, postDataSaga)
}

