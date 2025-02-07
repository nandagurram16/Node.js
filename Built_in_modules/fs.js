// crud
// reading file
const fs = require('fs')

fs.readFile('fs.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

// create file

fs.writeFile('exaple.html','utf8',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('file created sccessfull')
    }
})

// updating

const sample = 'sendig data to exaple.html'
fs.writeFile('exaple.html',sample,(err) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log('content created in the exaple.html')
    }
})

// To change file name

fs.rename('exaple.html','newfile.js',(err) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log('file name was changed')
    }
})

// File deleting

fs.unlink('newfile.js',(err) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log('file deleted')
    }
})