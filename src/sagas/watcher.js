import {takeLatest} from 'redux-saga/effects';
import {searchEmployeeSaga} from './EmployeeSaga';
import * as types from '../constants/actionTypes';



export default function* watchSearchEmployee(){
    yield takeLatest(types.SEARCHED_EMPLOYEE, searchEmployeeSaga);


}

