(function () {
    'use strict';

    angular.module('cpm.login').config(function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'src/scripts/login/login.view.html',
            controller: 'LoginController'
        })
    });
})();