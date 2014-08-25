var http = require('http');
var express = require('express');
var Includes = require('html-include');

var includes = Includes({
	document_root:__dirname + '/www'
})
var app = express();
var server = http.createServer(app);

includes.setup(app);
app.use(includes.serve);




server.listen(80, function(){
	console.log('server listening');
})