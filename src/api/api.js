// const baseUrl = 'http://localhost:3010';
const baseUrl = 'http://ec2-52-24-8-126.us-west-2.compute.amazonaws.com:8080';
export const EmployeeData = (searchQuery) => {
    //1

    var promise = new Promise((resolve, reject) => {
        fetch(`${baseUrl}/product?firstName=${searchQuery}`)
            .then(res => {
                resolve(res.json());
            })
    })
    return promise;
}



export const Employees = () => {
    var promise = new Promise((resolve, reject) => {
        fetch(`${baseUrl}/candidate/all`)
            .then(res => {
                resolve(res.json());
            })

    })
    return promise;
}

export const postData = (values) => {
    console.log("psotdata", values)
    if (values !== undefined) {

        let data = new FormData();
        data.append("json", JSON.stringify(values));

        fetch(`${this.baseURL}/candidate/save`,
            {
                method: "POST",
                body: data
            })
            .then(function (res) { return res.json(); })
            .then(function (data) { alert(JSON.stringify(data)) })
    }
}