// Create web server
// Create a web server that listens on port 3000 and serves a static file comments.html which you have created in the previous step.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    if(request.url === '/'){
        fs.readFile('comments.html', function(error, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        });
    }
});

server.listen(3000);