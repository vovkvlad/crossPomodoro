(function () {
    'use strict';
    /*
     Authentication service

     is used to login users,
     get/set user tokens, which came from the server, to localStorage
     (in order not to enter login&passwd every time
     */
    angular.module('cpm.utils').factory('cpmAuthentication', function (cpmSocket, cpmLocalStorage) {
        var _user = null;

         var _getUser = function () {
            var storedUser = cpmLocalStorage.get('userToken');

            if(storedUser) {
                _user = storedUser
            } else {
                _user = null;
            }

            return _user;
        };

        var _loginUser = function (credentials) {
            //TODO here should be some encryption logic

            return cpmSocket.emit ('login', credentials).then (
                function (successToken) {
                    cpmLocalStorage.set ('userToken', successToken);
                    return _getUser();
                },
                function (error) {
                    //TODO handle error
                });
        };

        return {
            getUser: _getUser,
            loginUser: _loginUser
        }
    });
})();