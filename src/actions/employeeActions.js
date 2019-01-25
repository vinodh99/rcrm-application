import * as types from '../constants/actionTypes';

export const searchedEmployeeAction = (value) => ({
    type: types.SEARCHED_EMPLOYEE,
    value
})
export const allEmployees = () => ({
    type: types.ALL_EMPLOYEES
})

export const postEmployeeData = (data) => ({
    type: types.POST_DATA,
    data
})