var http = require('http')

var port = 3000


var requestHandler = function(request,response){

    console.log(request.url);
    response.requestHandler("\hllo from node server")

}

var server = http.createServer(requestHandler)
server.listen(port)

console.log('Node server started')