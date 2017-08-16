/*var http = require('http');
var fs = require('fs');

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

	http.createServer(function (req, res) {
	    res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();
	}).listen(8080);
});*/


var http = require('http'),
    fs = require('fs'),
    util = require('util'),
    url = require('url');

var server = http.createServer(function(req, res) {
    if(url.parse(req.url).pathname == '/') {
        fs.readFile('./index.html', function(err, html){
        	res.writeHeader(200, {"Content-Type": "text/html"});  
        	res.write(html);  
        	res.end();
        })
    } else {
        var href = "."+req.url.toString();
        console.log(req.url);
        fs.readFile(href, function(err, html){
        	res.writeHeader(200, {"Content-Type": "text/html"});  
        	res.write(html);  
        	res.end();
        });
    }
});

server.listen(8080);