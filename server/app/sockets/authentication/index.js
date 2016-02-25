function authenticationService(socket) {
    socket.on('login', function (data, callback) {
        //this is basic stub until normal logic is implemmented
        if(data.username === 'demo' && data.password === 'password'){
            callback(null, 'Some usefull information i.e. user settings can be send here')
        } else {
           callback('Wrong username or password', null)
        }

        console.log('Recieved login');
    });
}

module.exports = authenticationService;