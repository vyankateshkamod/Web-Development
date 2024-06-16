let arr = [ 1, 2 , 3, 4 , 5, 6 ,7 ,8 ]
//Index     0  1   2  3   4  5  6  7

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[4])

arr[0] = 64
console.log(arr[0])

console.log(arr)
console.log(typeof arr)
console.log(arr.length)

console.log(arr.toString())
console.log(arr.join(" and "))

let numbers = [1 , 2 , 3 , 4 , 5]
numbers.splice(1,2)
console.log(numbers)


a=[1,2,3,4,56]

a.push(23)
console.log(a)
a.pop()
console.log(a)
a.shift()
console.log(a)
a.unshift(1)
console.log(a)
delete a[4]
console.log(a)