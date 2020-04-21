var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'Text/plain'});
    res.end('Ulaalaaaa\n');
}).listen(9000);

console.log('server runnint at http://127.0.0.1:9000');

process.on('SIGINT', function() {
    process.exit();
})