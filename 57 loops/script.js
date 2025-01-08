//for loop 
//while loop 
//do while loop


// for in loop

let obj = {
    name: "Satyam" ,
    role: "Actor",
    Company: "YRF"
}

for (const i in obj) {
    const element = obj[i];
    console.log(i,element)
}

// for of loop 
for (const charactor of "Maharastra") {
    console.log(charactor)
}