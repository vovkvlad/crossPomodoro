(function () {
    'use strict';

    angular.module('cpm.main').config(function ($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            templateUrl: 'src/scripts/main/main.view.html',
            controller: 'MainController'
        })
    });
})();