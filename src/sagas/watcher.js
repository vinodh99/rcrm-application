import { takeLatest } from 'redux-saga/effects';
import { searchEmployeeSaga, allEmployeesSaga } from './EmployeeSaga';
import * as types from '../constants/actionTypes';



export default function* watchSearchEmployee() {
    yield takeLatest(types.ALL_EMPLOYEES, allEmployeesSaga)
    yield takeLatest(types.SEARCHED_EMPLOYEE, searchEmployeeSaga);
}

