// import { resolve } from "url";
// const baseUrl = 'http://localhost:3010';
const baseUrl = 'https://swag-api.herokuapp.com';
let that = this;
export const EmployeeData = (searchQuery) =>{
        //1
        
        var promise = new Promise((resolve,reject) => {
//        2
            fetch(`${baseUrl}/product?firstName=${searchQuery}`)
            .then(res => {
                //then is chained to whatever fetch is returning
                    // 4
                    // console.log(res.json())

                resolve (res.json());
             //json takes the response and converts to json 
            })
        // });
//        3
    })
    // console.log(promise)
    return promise;
}



export const Employees = () =>{
    //1
    var promise = new Promise((resolve,reject) => {
//        2
        fetch(`${baseUrl}/products`)
        .then(res => {
            //then is chained to whatever fetch is returning
                // 4
                // console.log(res.json())

            resolve (res.json());
         //json takes the response and converts to json 
        })
    // });
//        3
})
// console.log(promise)
return promise;
}


// export default EmployeeData;//ES6 format of module.export
