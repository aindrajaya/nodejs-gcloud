var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'Text/plain'});
    res.end('Njayyyyhuuuuu\n');
}).listen(8080);

console.log('server runnint at http://localhost:8080');

process.on('SIGINT', function() {
    process.exit();
})