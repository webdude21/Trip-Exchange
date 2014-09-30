'use strict';

tripExchange.controller('DriversController',
    function DriversController($scope, identity, DriversResource) {
        $scope.drivers = DriversResource.driversInfo.getPublic();
        $scope.isAuthenticated = identity.isAuthenticated();
        $scope.userFilter = function (filter, page) {
            if (identity.isAuthenticated()) {
                var query = {
                    page: page || 1,
                    username: filter || ''
                };
                $scope.drivers = DriversResource.driversInfo.getPrivate(query);
            }
        }
    });
