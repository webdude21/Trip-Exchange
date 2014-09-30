'use strict';

tripExchange.controller('TripDetailController',
    function TripDetailController($scope, notifier, $routeParams, TripsResource) {

        TripsResource.getTripById($routeParams.id)
            .then(function (response) {
                $scope.trip = response.data;
            }, (function (err) {
                notifier.error(err.data.message);
            }));

        $scope.joinTrip = function (){
            TripsResource.joinById($routeParams.id)
                .then(function () {
                    notifier.success("You've joined successfully!")
                }, (function (err) {
                    notifier.error(err.data.message);
                }));
        }
    });
