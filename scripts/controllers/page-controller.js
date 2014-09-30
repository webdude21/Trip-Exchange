'use strict';

tripExchange.controller('PageController',
    function PageController($scope, author, auth) {
        $scope.author = author;
        auth.isAuthenticated();
    }
);