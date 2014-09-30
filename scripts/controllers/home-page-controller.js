'use strict';

tripExchange.controller('HomePageController',
    function HomePageController($scope, StatResource, TripsResource, DriversResource) {
        $scope.stats = StatResource.get();
        $scope.trips = TripsResource.tripsService.getPublic();
        $scope.drivers = DriversResource.driversInfo.getPublic();
    });
