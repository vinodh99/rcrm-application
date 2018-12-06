import employee from './employeeSearch';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    employee
})

export default rootReducer;

// import initialState from './initialState';
// import * as types from '../constants/actionTypes';

// const reducer = (state, action) => {
//     // console.log('im reducer')
//     switch(action.type){
//         // case types.EMPLOYEE_LOAD_SUCCESS:
//         // return  Object.assign({}, state, action.videos)
//         case types.SEARCHED_EMPLOYEE:
//             let newState = {...state};
//             if(action.employee !== undefined){
//             newState = Object.assign({}, state, {employee : Object.assign({}, action.employee)})
//             } 
//             return {...newState};
//             // else`{ 
//                 // return 'bull shit'
//             // }
//         // return [...state, action];
//         default:
//         return state;
//     }
// }
// export default reducer;