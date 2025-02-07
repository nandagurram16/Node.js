const http = require('http')

const myserver = http.createServer((request,response) =>{
    response.write('iam nanda kumar,sending data to clint to server')
    response.end()
})
myserver.listen(5000)