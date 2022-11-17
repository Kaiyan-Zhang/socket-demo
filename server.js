let WebSocketServer = require('websocket').server;

let httpServer = require('http').createServer((req, res)=>{
   res.end('hello, world!')
}).listen(3000);

wsServer = new WebSocketServer({
    httpServer,
    autoAcceptConnections: true,
});

wsServer.on('request', req => {
    let connection = req.accept('echo-protocol', req.origin); //TODO
    connection.on('message', msg => {
        let data = msg.utf8Data;
        connection.sendUTF(+data+1);
    });
});
