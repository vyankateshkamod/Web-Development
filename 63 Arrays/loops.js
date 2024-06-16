let a = [1,2,3,4,5,6,7]

// for (let i = 0; i < a.length; i++) {             //Classical Loop
//     const element = a[i];
//     console.log(element)
// }


a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})