var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    /*pass http to sockets/index.js so that it could construct io object and creates
    nodes which attach events logic to it*/
    ioSockeConstructor = require('sockets')(http);

app.use('/scripts', express.static(__dirname + '../../client/dist/scripts'));
app.use('/resources', express.static(__dirname + '../../client/dist/resources'));
app.use('/vendor', express.static(__dirname + '../../client/dist/vendor'));


app.get('/', function (req, res) {
    res.sendFile(__dirname, + '../../client/dist/index.html');
});

http.listen(3030, function () {
    console.log('server started successfully on port 3030');
});

