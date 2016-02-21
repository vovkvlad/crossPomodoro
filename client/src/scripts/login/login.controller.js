(function () {
    'use strict';

    angular.module('cpm.login').controller('LoginController', function ($scope, cpmAuthentication, cpmSocket) {
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.submit = function () {
            cpmSocket.emit('login').then(function (data) {
                console.log('data received from the server:' + data);
            });
        }
    });
})();