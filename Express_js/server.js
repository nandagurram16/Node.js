
const express = require('express')
const dotEnv = require('dotenv')
const {MongoClient} = require('mongodb')

const app = express()

const port = 4000

dotEnv.config()

MongoClient.connect(process.env.mongo_uri)
.then(() =>{
    console.log('mongodb connected')
})
.catch((error) =>{
    console.error('Error',error)
})

app.listen(port,() =>{
    console.log(`server started at ${port}`)
})