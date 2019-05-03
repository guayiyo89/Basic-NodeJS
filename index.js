const express = require('express');
const app = express();

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

app.use(express.static(__dirname + '/public/'));

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);
