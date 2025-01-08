const express = require('express')
const app = express()
require('dotenv').config()
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser')
const cors = require('cors')


app.use(bodyparser.json())
app.use(cors())


// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';
const port = 3000;
 client.connect();

//get all the passwords 
app.get('/', async(req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
})

//save all the passwords
app.post('/', async(req, res) => {
    const passwords = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(passwords);
    res.send({success: true, result: findResult});  
})

//delete  password by id
app.delete('/', async(req, res) => {
    const passwords = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(passwords);
    res.send({success: true, result: findResult});  
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})