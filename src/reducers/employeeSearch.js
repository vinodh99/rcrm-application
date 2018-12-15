// import initialState from './initialState';
// import * as types from '../constants/actionTypes';

// export default function (state = initialState.employees, action){
//     switch(action.type){
//         // case types.EMPLOYEE_LOAD_SUCCESS:
//         // return  Object.assign({}, state, action.videos)
//         case types.SEARCHED_EMPLOYEE:
//         return {...state, searchedEmployee: action.employee._id};
//         default:
//         return state;
//     }
// }


import initialState from './initialState';
import * as types from '../constants/actionTypes';


const handleAllEmployeeList = (state, action) => {
    let newState = { ...state };
    if (action.employees != undefined) {
        newState = Object.assign({}, state, { employees: action.employees })
    }
    return { ...newState };

}

const handleSearchedEmployee = (state, action, arr) => {
    // console.log('im reducer')
    let newState = { ...state };
    let result = [];
    if (action.value != undefined) {
        for (let val in arr) {
            if (arr[val].firstName.match(action.value)) {
                result.push(arr[val])
            }
        }
        newState = Object.assign({}, state, { employee: result })

    }
    return { ...newState };

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
            return handleSearchedEmployee(state, action, arr);
        case types.ALL_EMPLOYEES:
            const arr = action.employees;
            return handleAllEmployeeList(state, action);

        default:
            return state;
    }
}