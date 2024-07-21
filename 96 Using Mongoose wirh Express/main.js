// https://www.npmjs.com/package/mongodb
import mongoose from 'mongoose'
import express from 'express'
import { Todo } from './models/Todo.js'

let a = await mongoose.connect('mongodb://localhost:27017/')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: 'Welcome', dsc: 'this is dsc', isDone: false, days: Math.floor(Math.random() * 45 + 5 * Math.random()) })
    todo.save()
    res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({ title:todo.title, dsc:todo.dsc })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})