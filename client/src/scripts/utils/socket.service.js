(function () {
    'use strict';

    angular.module('cpm.utils').factory('cpmSocket', function ($rootScope, $q) {
        var socket = io.connect();

        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () {
                    var args = arguments;
                    $rootScope.$apply(function () {
                        callback.apply(socket, args);
                    });
                });
            },
            emit: function (eventName, data) {
                var deferred = $q.defer();

                socket.emit(eventName, data, function (error, returnedData) {
                    if (error) {
                        deferred.reject(error);
                    } else {
                        deferred.resolve(returnedData);
                    }
                });

                return deferred.promise;
            }
        }
    });
})();