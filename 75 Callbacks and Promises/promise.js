console.log("This is promise")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        console.log("no random number supporting")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Hello")
        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        console.log("no random number suppoting 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Hello 2")
        }, 1000);
    }
})

let p = Promise.all([prom1, prom2])

p.then((e) => {
    console.log(e)
}).catch(err => {
    console.log("err")
})