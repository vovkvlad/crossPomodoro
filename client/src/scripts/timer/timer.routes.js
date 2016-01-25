(function () {
    'use strict';

    angular.module('cpm.timer').config(function ($stateProvider) {
        $stateProvider.state('timer', {
            url: '/timer',
            templateUrl: 'src/scripts/timer/timer.view.html',
            controller: 'TimerController'
        })
    });
})();