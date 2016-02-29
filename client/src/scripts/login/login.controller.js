(function () {
    'use strict';

    angular.module('cpm.login').controller('LoginController', function ($scope, cpmAuthentication, $state) {
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.submit = function () {
            cpmAuthentication.loginUser($scope.credentials).then(function (data) {
                $state.go('timer');
            }, function (error) {
                console.log(error);
            });

            //cpmSocket.emit('login', $scope.credentials).then(function (data) {
            //    console.log('data received from the server:' + data);
            //});
        }
    });
})();