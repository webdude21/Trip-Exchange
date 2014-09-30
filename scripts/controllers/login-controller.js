'use strict';

tripExchange.controller('LoginController',
    function LoginController($scope, identity, auth, notifier, $location) {
        $scope.user = {};
        var USER_LOGIN_SUCCESS = "You've successfully logged in!";
        var USER_LOGIN_FAILED = 'Username and/or Password is not valid!';
        var USER_LOGOUT_SUCCESS = 'Successful logout!';

        $scope.identity = identity;

        $scope.login = function(user) {
            auth.login(user).then(function(success) {
                if (success) {
                    notifier.success(USER_LOGIN_SUCCESS);
                }
                else {
                    notifier.error(USER_LOGIN_FAILED);
                }
            });
        };

        $scope.logout = function() {
            auth.logout().then(function() {
                notifier.success(USER_LOGOUT_SUCCESS);
                if ($scope.user) {
                    $scope.user = {};
                }
                $location.path('/');
            })
        };
    });
