import fs from "fs/promises"

let a = await fs.readFile("car.txt")

let b = await fs.appendFile("car.txt","\n\n\n limited offer only ")

console.log(a.toString(),b)