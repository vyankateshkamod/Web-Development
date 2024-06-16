// for in loop

let obj = {
    name: "Satyam" ,
    role: "Actor",
    Company: "YRF"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
}

// for of loop 
for (const charactor of "Maharastra") {
    console.log(charactor)
}