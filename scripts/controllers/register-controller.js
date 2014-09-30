'use strict';

tripExchange.controller('RegisterController', function RegisterController ($scope, $location, auth, notifier) {
    var SUCCESSFUL_REGISTRATION = 'Registration successful!';
    var BOTH_PASSWORDS_SHOULD_MATCH = 'Both passwords should be the same!';

    $scope.register = function(user) {
        if (user.password !== user.confirmPassword){
            notifier.error(BOTH_PASSWORDS_SHOULD_MATCH);
            user.password = undefined;
            user.confirmPassword = undefined;
            return;
        }

        auth.register(user).then(function() {
            notifier.success(SUCCESSFUL_REGISTRATION);
            $location.path('/');
        });
    }
});