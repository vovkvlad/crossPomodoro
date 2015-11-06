(function () {
    'use strict';

    angular.module('cpm.login').controller('LoginController', function ($scope, cpmAuthentication, cpmSocket) {
        $scope.credentials = {
            username: '',
            password: ''
        };
    });
})();