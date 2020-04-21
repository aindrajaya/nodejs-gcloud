var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'Text/plain'});
    res.end('Yuhuuuuu\n');
}).listen(8084);

console.log('server runnint at http://localhost:8084');

process.on('SIGINT', function() {
    process.exit();
})