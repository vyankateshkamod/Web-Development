

(async function main() {
    
    const sleep = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(45)
            }, 4000)
        })
    }
    
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
    
    let [x, y, rest] = [1, 5, 8, 7, 9, 6, 10]
    console.log(x, y, rest)
    
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    
    // let {a,b} = obj
    // console.log(a,b)
    
    
    const sum = async (a, b, c) => {
        return a + b + c
    }
    
    let arr = [1, 4, 7]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))
    
    
})()

var a1 = 6

console.log(a1)