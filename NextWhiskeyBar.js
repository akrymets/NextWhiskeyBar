/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var fs = require('fs');
var path = require('path');

var port = 3000;
var host = 'localhost';


var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });

    console.log('Request: ' + req.url);

    if (req.method == 'GET') {
        
        var url;
        
        if (req.url == '/') url = '/index.html';
        else url = req.url;

        var filePath = path.resolve('./public' + url);
        var fileExt = path.extname(filePath);
        
        if (fileExt == '.html') {
            fs.exists(filePath, function(exists){
                if (!exists) {
                    res.writeHead(404, {'Content-type':'text/html'});
                    res.end('Requested page ' + url + ' is not found');
                } else {
                    res.writeHead(200, {'Content-type':'text/html'});
                    fs.createReadStream(filePath).pipe(res);
                }
            });
        } else {
            res.writeHead(400, {'Content-type':'text/html'});
            res.end('Requested format is not supported');
        }

        
    } else {
        res.writeHead(405, {'Content-type':'text/html'});
        res.end('Requested method is not supported');
        console.log('Unsupported request method');
    }
    
});

server.listen(port, host, 'server started on ' + host + ":" + port);
