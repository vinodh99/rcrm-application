import initialState from './initialState';
import * as types from '../constants/actionTypes';


const handleAllEmployeeList = (state, action) => {
    let newState = { ...state };
    if (action.employees !== undefined) {
        newState = Object.assign({}, state, { employees: action.employees })
    }
    // console.log(newState)
    return { ...newState };

}

const handleSearchedEmployee = (state, action) => {
    // console.log('im reducer')
    let newState = { ...state };
    if (action.value !== undefined) {
        let result = [];
        for (let val in state.employees) {
            if (state.employees[val].firstName.match(action.value)) {
                result.push(state.employees[val])
            }
        }
        newState = Object.assign({}, state, { employee: result })
    }
    return { ...newState };

}
const postData = (state, action) => {
    let newState = { ...state };
    if (action.value !== undefined) {
        console.log(action.value)
    }
}

export default (state = initialState, action) => {
    // console.log('im reducer')
    switch (action.type) {
        // case types.EMPLOYEE_LOAD_SUCCESS:
        // return  Object.assign({}, state, action.videos)
        case types.SEARCHED_EMPLOYEE:

            // let newState = {...state};
            // if(action.employee !== undefined){
            // newState = Object.assign({}, state,{employee : action.employee})
            // // newState = Object.assign({}, state, action.employee)
            // }
            // return {...newState};
            return handleSearchedEmployee(state, action);
        case types.ALL_EMPLOYEES:
            return handleAllEmployeeList(state, action);
        case types.POST_DATA:
            return postData(state, action);
        default:
            return state;
    }
}