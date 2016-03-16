function roomService (socket, io) {
    socket.on('appInited', function (userToken) {
        console.log('user will be joined to his room');
        // identify user by token and connect him to his room
        //retrieving from mongo should be implemented
        var userId = userToken.split('-')[0];
        socket.join(userId);
        io.sockets.in(userId).emit('roomJoined', {msg: 'New device joined the room', roomId: userId});
        //socket.to(userId).emit('roomJoined', {msg: 'New device joined the room', roomId: userId});
    });
}

module.exports = roomService;