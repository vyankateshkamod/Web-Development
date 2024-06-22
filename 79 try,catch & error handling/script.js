let a = prompt("Enter first number")

let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main() {
    try {
        console.log("The sum is ", sum * x)
        return true
    }
    catch (error) {
        //because x is not defined 
        console.log("Error AA Gaya Bhai")           
        return true
    }
    finally {
        // code cannot execute further any return statement for that to execute code finally keyword us used  
        console.log("files are being closed and db connection is being closed")
    }
}

main()
