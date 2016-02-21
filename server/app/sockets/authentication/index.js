function authenticationService(socket) {
    socket.on('login', function (data, callback) {
        console.log('Recieved login');
        callback(null, 'uhu!');
    });
}

module.exports = authenticationService;