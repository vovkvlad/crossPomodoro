(function () {
    'use strict';

    angular.module('cpm').config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('main');
        });
    });
})();