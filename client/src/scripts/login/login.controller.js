(function () {
    'use strict';

    angular.module('cpm.login').controller('LoginController', function ($scope, cpmAuthentication, $state) {
        $scope.credentials = {
            username: '',
            password: ''
        };
        $scope.submit = function () {
            cpmAuthentication.loginUser($scope.credentials).then(function (data) {
                $state.go('main.timer');
            }, function (error) {
                console.log(error);
            });
        }
    });
})();