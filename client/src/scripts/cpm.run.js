(function () {
    'use strict';

    angular.module('cpm').run(function ($rootScope, $state, cpmAuthentication) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            //here should bo logic with authentiacation
        });
    });
})();