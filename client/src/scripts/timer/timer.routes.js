(function () {
    'use strict';

    angular.module('cpm.main.timer').config(function ($stateProvider) {
        $stateProvider.state('main.timer', {
            url: '/timer',
            templateUrl: 'src/scripts/timer/timer.view.html',
            controller: 'TimerController'
        })
    });
})();