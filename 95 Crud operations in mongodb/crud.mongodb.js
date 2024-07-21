//crud operations
use("CrudDb")


//CREATE
db.createCollection('courses')

db.courses.insertOne({
    name: 'Vyankatesh',
    lives: 'Madrid',
    Role: 'Engineer'
})

db.courses.insertMany([

    {
        name: 'John',
        lives: 'New York',
        role: 'Designer'
    },
    {
        name: 'Anna',
        lives: 'Berlin',
        role: 'Developer'
    },

    {
        name: 'Maria',
        lives: 'Paris',
        role: 'Artist'
    },
    {
        name: 'Lee',
        lives: 'Seoul',
        role: 'Doctor'
    },
    {
        name: 'Akira',
        lives: 'Tokyo',
        role: 'Architect'
    },
    {
        name: 'Carlos',
        lives: 'Buenos Aires',
        role: 'Chef'
    },
    {
        name: 'Fatima',
        lives: 'Dubai',
        role: 'Teacher'
    },
    {
        name: 'Olivia',
        lives: 'London',
        role: 'Lawyer'
    },
    {
        name: 'Nina',
        lives: 'Moscow',
        role: 'Scientist'
    }
])


//READ
let a = db.courses.find({ role: 'Developer' })
console.log(a)
console.log(a.count())

console.log(a.toArray())

let b = db.courses.findOne({ role: 'Developer' })
console.log(b)

//UPDATE
db.courses.updateOne({ role: 'Developer' }, { $set: { role: 'Engineer' } })

db.courses.updateMany({ lives: 'Madrid' }, { $set: { lives: 'New York' } })

//DELETE
db.courses.deleteOne({lives:'New York'})

db.courses.deleteMany({lives:'New York'})

// https://www.mongodb.com/docs/manual/reference/operator/query/