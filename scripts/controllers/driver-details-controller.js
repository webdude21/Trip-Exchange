'use strict';

tripExchange.controller('DriverDetailsController',
    function DriverDetailsController(notifier, $scope, $routeParams, DriversResource) {

        DriversResource.getDriverDetail($routeParams.id)
            .then(function (response) {
                $scope.driver = response.data;
            }, (function (err) {
                notifier.error(err.data.message);
            }));
    });
