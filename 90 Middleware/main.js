const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

const blog = require('./blog')
app.use('/blog', blog)

//Middleware 1
app.use((req,res,next)=>{
    console.log(req.headers)
    req.venky = 'hey champ'
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

//Middleware 2
app.use((req,res,next)=>{
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About ' + req.venky)
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})