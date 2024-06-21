// async function getdata(){
//     return  new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         },3500);
//     })
// }

// settle means resolve or reject 
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getdata() {
    //simulate getting data from server
    //let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') 


    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    let data = await x.json()
    return data
}

async function main() {
    console.log("loading Modules")

    console.log("Do something else")

    console.log("Load Data")

    let data = await getdata()

    console.log(data)

    console.log("process data")

    console.log("task 2")
}
main()
