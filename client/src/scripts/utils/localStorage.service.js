(function () {
    'use strict';

    angular.module('cpm.utils').factory('cpmLocalStorage', function () {
        return {
            set: function (key, value) {
                //TODO Here some checks are supposed to be
                localStorage.setItem(key, JSON.stringify(value));
            },
            get: function(key) {
                var data = localStorage.getItem(key);

                return data ? JSON.parse(data) : null;
            }
        }
    })
})();