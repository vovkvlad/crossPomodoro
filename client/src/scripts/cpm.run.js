(function () {
    'use strict';

    angular.module('cpm').run(function ($rootScope, $state, cpmAuthentication) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            //should work as for now, later logic with sessions should be implemented
            if (toState.name != 'login') {
                if(!cpmAuthentication.getUser()) {
                    event.preventDefault();
                    $state.go('login', toParams);
                }
            }
        });
    });
})();