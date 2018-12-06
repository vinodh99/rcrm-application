import {all, put, call} from 'redux-saga/effects';
import {EmployeeData, Employees} from '../api/api';
import * as types from '../constants/actionTypes';

export function* searchEmployeeSaga({payload}){
    try{
        // console.log(payload+'here I am ');
        const employee = yield call(EmployeeData,payload);
        const employees = yield call(Employees)
        // console.log(employees);
        yield all([
            // put({type: types.EMPLOYEE_LOAD_SUCCESS, employees}),
            put({type: types.ALL_EMPLOYEES, employees: employees}),
            put({type: types.SEARCHED_EMPLOYEE,employee: employee[0]})
        ]);
    }catch(error){
        yield put ({type: 'SEARCH_EMPLOYEE_ERROR', error});
    }
}