const { error } = require("console")
const fs = require("fs")
console.log(fs)

console.log("Starting")

// fs.writeFileSync("car.txt","This is G Wagon")

fs.writeFile("car2.txt","Hey this is Jeep",()=>{
    console.log("Done")
    fs.readFile("car2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("car.txt", " of cost 2cr",(e,d)=>{
    console.log(d)
})
console.log("Ending")