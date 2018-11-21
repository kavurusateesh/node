var http =  require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('Hii Everybody');

});


    res.writeHead(200,{"content-type":"text/html"});
    res1.end('<h1>Welcome To Node Js');



server.listen(8080);

console.log("http server is created on port 8080");