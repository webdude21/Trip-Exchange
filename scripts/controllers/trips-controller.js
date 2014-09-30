'use strict';

tripExchange.controller('TripsController',
    function TripsController($scope, identity, TripsResource, CitiesResource) {

        $scope.isAuthenticated = identity.isAuthenticated();
        $scope.cities = CitiesResource.allCities();

        $scope.clearFilters = function (){
            $scope.query = {};
            getPrivateDefaults();
        };

        function getPrivateDefaults (){
            $scope.trips = TripsResource.tripsService.getBy({
                orderBy: 'date',
                orderType: 'asc',
                from: '',
                to: '',
                page: 1,
                finished: false,
                onlyMine:  false
            });
        }

        if (!$scope.isAuthenticated){
            $scope.trips = TripsResource.tripsService.getPublic();
        }else{
            getPrivateDefaults();
        }

        $scope.userFilter = function (query){
            if ($scope.isAuthenticated){
                $scope.trips = TripsResource.tripsService.getBy({
                    orderBy: query.orderBy || 'date',
                    orderType: query.orderType || 'asc',
                    from: query.from || '',
                    to: query.to || '',
                    page: query.page || 1,
                    finished: query.finished || false,
                    onlyMine:  query.onlyMine || false
                });
            }
        }
    });
