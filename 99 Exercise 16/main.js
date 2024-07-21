const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/company');
const Employee = require("./models/Employee")
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    //Clear the collection
    await Employee.deleteMany({})
    //Generate random data
    let randomName = ['Soham', 'Mohan', 'Shubham', 'Rahul']
    let randomCities = ['Nashik', 'Pune', 'Mumbai', 'Nagpur']
    let randomLang = ['Python', 'Javascript', 'C++', 'Java']

    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: getRandom(randomName),
            salary: Math.floor(Math.random()*22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random()>0.5)?true:false
        })
        console.log(e)
    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})