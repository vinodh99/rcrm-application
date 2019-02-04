import { put, call } from 'redux-saga/effects';
import { Employees, postData } from '../api/api';
import * as types from '../constants/actionTypes';


const baseUrl = 'http://ec2-52-24-8-126.us-west-2.compute.amazonaws.com:8080';
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
        console.log("herheherherherh", action.data)
        const { firstName, lastName, emailAddress } = action.data;
        const d = { firstName, lastName, emailAddress };
        const response = yield call(fetch, `${baseUrl}/candidate/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                // 'Content-Type' :'multipart/form-data, application/x-www-form-urlencoded; charset=utf-8'
            },
            body: JSON.stringify(action.data)
        })
        setTimeout(function () {
            if (response) {
                console.log("im response", response)
            }
        }, 3000);
        yield put({ type: types.POST_DATA, data: "success" })
    }
    catch (error) {
        yield put({ type: 'ADD_EMPLOYEE_ERROR', error })
    }
}