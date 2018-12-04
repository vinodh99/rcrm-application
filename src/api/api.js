// import { resolve } from "url";

// class EmployeeData{
export const EmployeeData = (searchQuery) =>{
        //1
        // var promise = new Promise((resolve,reject) => {
//        2
            return fetch(`http://localhost:3002/product?firstName=${searchQuery}`)
            .then(res => {
                //then is chained to whatever fetch is returning
                    // 4
                return (res.json());
             //json takes the response and converts to json 
            })
        // });
//        3
    // })
    // console.log(promise)
    // return promise;
}


export default EmployeeData;//ES6 format of module.export
