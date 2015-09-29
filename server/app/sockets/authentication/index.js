function authenticationService(socket) {
    socket.on('login', function (socket) {
        console.log('Recieved login');
    });
}

module.exports = authenticationService;