const http = require('http');

const port = 200;

// creamos el servidor
const server = http.createServer((request, response) => { // request es lo que me pide el usuario y response la respuesta que damos
    const url = request.url;
    const controller = url.split("/");
    console.log(controller);

    if (url === "/"){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Home');
    } else if (url === "/coffee"){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Lista de cafes')
    } else if (url === "/contact"){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end("Contactos")
    } else {
        // Solo enviamos los encabezados de error aquí si ninguna de las rutas coincide
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('Error 404 | Recurso no encontrado')
    }
    console.log(request.url);
});

server.listen(port, ()=>{
    console.log("Servidor en el puerto", port)
});

// con http://127.0.0.1:200/ entro

