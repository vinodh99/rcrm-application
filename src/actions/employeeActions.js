import * as types from '../constants/actionTypes';

export const searchedEmployeeAction = (payload) => ({
    type: types.SEARCHED_EMPLOYEE,
    payload
})