var http = require("http");
var url = require("url");

function iniciar(route, handle) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        var dataPosteada = "";
        console.log("Peticion para " + pathname + " recibida.");

        request.setEncoding("utf8");

        request.addListener("data", function(trozoPosteado) {
            dataPosteada += trozoPosteado;
            console.log("Recibido trozo POST '" + trozoPosteado + "'.");
        });

        request.addListener("end", function(){
            route(handle, pathname, response, dataPosteada);
        })
               

    }).listen(8888);

    console.log('Servidor Iniciado! :)');
}

exports.iniciar = iniciar;
