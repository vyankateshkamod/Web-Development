/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random()
console.log(random)

let a = prompt("Enter first number : ")
let b = prompt("Enter Operation : ")
let c = prompt("Enter second number : ")

let obj = {
    "+" : "*" ,
    "*" : "+" ,
    "-" : "/" ,
    "/" : "**"
}

if(random > 0.1)
{
    //perform correct operation
    console.log(`The result is ${eval(`${a} ${b} ${c}`)}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}

else{
    //perform wrong operation 
    b = obj[b]
    console.log(`${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}