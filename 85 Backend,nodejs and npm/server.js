console.log("Hello Word")

var slugify =  require('slugify')

let a = slugify('some string')
console.log(a)

//if you want to use something other than '-' as separator
const b = slugify('some str$$$@@i%ng' , '_')
console.log(b)

const c = slugify('some string' , '()')
console.log(c)