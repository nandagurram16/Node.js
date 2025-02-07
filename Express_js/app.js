
const express = require ('express')

const app = express()

const port = 5000

// if we want to get data from this server(app) we need to use "routr",to create router we use methods

app.get('/apple',(req,res) =>{
    res.send({
        name:'nanda',
        age:23,
        place:'kadiri'
    })
})

app.listen(port, () =>{
    console.log('server running sucessfully')
})