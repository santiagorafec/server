var http = require('http');
var myServer = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<b>Hello</b> World<br/> <i>How have you been?</i>");
    response.end();
});

myServer.listen(80);
