// let obj={
//     a:1,
//     b:"Hello"
// }

// console.log(obj)

// let Animal = {
//     eats : true 
// }

// let rabbit = {
//     jumps : true 
// }

//rabbit.__proto__ = Animal   // set rabbit.[[prototype]] = Animal


class Animal{
    constructor(name){
        this.name = name 
        console.log("Object is created ...")
    }

    eats(){
        console.log("Kha raha hoo ")
    }

    jumps(){
        console.log("Kood raha hoo")
    }
}

class Lion extends Animal {
    constructor(name){
        super(name)
        console.log("Object is creted and he is lion ")
    }

    eats(){
        super.eats()
        console.log("Kha raha hoo roar")
    }
}

let a = new Animal("Peackok")
console.log(a)

let l = new Lion("Shera")
console.log(l)