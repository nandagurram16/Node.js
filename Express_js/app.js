const express = require('express')

const app = express()

// middeleware
const firsthome = ((req,res,next) =>{
    if(10 < 20){
        next()
    }
})

const firstabout = ((req,res,next) =>{
    if ((1+2) ==3){
        next()
    }
})

const firstpage = ((req,res,next) =>{
    if(2 < 4){
        next()
    }
})

const firstobj = ((req,res,next) =>{
    if(4 == 4){
        next()
    }
})
app.get('/home', firsthome,(req,res) =>{
    res.send('iam home page')
})

app.get('/about',firstabout,(req,res) =>{
    res.send('iam about page')
})

app.get('/page/:id', firstpage,(req,res) =>{
    res.send('iam page 120')
})

app.get('/objdata',firstobj,(req,res) =>{
    res.send({
        name:'nanda',
        place:'kadiri',
        age:23,
        address:{pin:20,near:'police station'}
        
    })
})

app.listen(8080,() =>{
    console.log('sever was started')
})