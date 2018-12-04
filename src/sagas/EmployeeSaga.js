import {all, put, call} from 'redux-saga/effects';
import {EmployeeData} from '../api/api';
import * as types from '../constants/actionTypes';

export function* searchEmployeeSaga({payload}){
    try{
        // console.log(payload+'here I am ');
        const employee = yield call(EmployeeData,payload);
        // console.log(employee);
        yield all([
            // put({type: types.EMPLOYEE_LOAD_SUCCESS, employees}),
            put({type: types.SEARCHED_EMPLOYEE, searchedEmployee: employee.firstName})
        ]);
    }catch(error){
        yield put ({type: 'SEARCH_EMPLOYEE_ERROR', error});
    }
}