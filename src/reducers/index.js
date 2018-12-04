// import employees from './employeeSearch';
// import {combineReducers} from './redux';
// const rootReducer = combineReducers({
//     employees: employees
// })

// export default rootReducer;

import initialState from './initialState';
import * as types from '../constants/actionTypes';
import searchEmployee from '../components/employeeData/searchEmployee';

const reducer= (state = initialState, action) => {
    // console.log('im reducer')
    switch(action.type){
        // case types.EMPLOYEE_LOAD_SUCCESS:
        // return  employees= Object.assign({}, state, action.employees)
        case types.SEARCHED_EMPLOYEE:
        // console.log(action)
        return {...state, searchedEmployee: action.payload};
        default:
        return state;
    }
}
export default reducer;