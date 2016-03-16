function InitSockets (http) {
    var io = require ('socket.io') (http);

    io.on ('connection', function (socket) {
        console.log('io connected');
        //put here all modules that handles different socket logic
        require ('./authentication') (socket);
        // TODO: decide how to pass io object more appropriately
        require ('./rooms') (socket, io);

    });
}

module.exports = InitSockets;