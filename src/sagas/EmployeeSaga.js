import { put, call } from 'redux-saga/effects';
import { Employees, postData } from '../api/api';
import * as types from '../constants/actionTypes';

// export function* searchEmployeeSaga({value}){
// export function* searchEmployeeSaga(value) {

//     try {
//         yield put({ type: types.SEARCHED_EMPLOYEE, value })

//     } catch (error) {
//         yield put({ type: 'SEARCH_EMPLOYEE_ERROR', error });
//     }
// }

export function* allEmployeesSaga() {
    try {
        // console.log(payload+'here I am ');
        const employees = yield call(Employees);
        // const employee = yield call(EmployeeData, value);

        // console.log(employees);
        yield put({ type: types.ALL_EMPLOYEES, employees: employees });


    } catch (error) {
        yield put({ type: 'SEARCH_EMPLOYEE_ERROR', error });
    }

}

export function* postDataSaga(action) {
    try {
        console.log(action.value)
        yield call(postData(), action.values)
        yield put({ type: types.POST_DATA })
    }
    catch (error) {
        yield put({ type: 'ADD_EMPLOYEE_ERROR', error })
    }
}