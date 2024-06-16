//Normal function

function sum(a,b)
{
    console.log(a+b)
}
sum(5,65)

function sum2(a,b,c=3)
{
    console.log(a,b,c)
    return a+b+c
}

result1 = sum2(3)                           //NaN : not a number 
result2 = sum2(4,6)
result3 = sum2(4,2,8)

console.log("sum is ",result1)
console.log("sum is ",result2)
console.log("sum is ",result3)