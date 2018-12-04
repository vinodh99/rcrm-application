import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.employees, action){
    switch(action.type){
        // case types.EMPLOYEE_LOAD_SUCCESS:
        // return  Object.assign({}, state, action.videos)
        case types.SEARCH_EMPLOYEE:
        return {...state, searchedEmployee: action.employee.firstName};
        default:
        return state;
    }
}