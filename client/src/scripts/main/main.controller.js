(function () {
    'use strict';

    angular.module('cpm.main').controller('MainController', function ($scope, cpmSocket,  cpmAuthentication) {
        cpmSocket.emit('appInited', cpmAuthentication.getUser());

        cpmSocket.on('roomJoined', function (data) {
            console.log(data.msg);
            console.log(data.roomId);
        })
    });
})();