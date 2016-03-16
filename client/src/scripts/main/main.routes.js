(function () {
    'use strict';

    angular.module('cpm.main').config(function ($stateProvider) {
        $stateProvider.state('main', {
            abstract: true,
            url: '/main',
            templateUrl: 'src/scripts/main/main.view.html',
            controller: 'MainController'
        });
    });
})();