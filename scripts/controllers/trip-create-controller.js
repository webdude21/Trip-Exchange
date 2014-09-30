'use strict';

tripExchange.controller('TripCreateController',
    function TripCreateController($scope, notifier, TripsResource, CitiesResource) {
        $scope.cities = CitiesResource.allCities();

        $scope.createNewTrip = function (trip) {
            if (trip.availableSeats < 1) {
                notifier.error('You should have ablest one available seat to create a trip');
                return
            }

//            if (trip.departureTime > new Date()){
//                notifier.error('You cannot create trips in the past');
//                return;
//            }

            if (trip.from == trip.to){
                notifier.error('Your destination and departure point should not be the same');
                return;
            }


            trip.availableSeats = trip.availableSeats.toString();
            console.log(trip);
            TripsResource.postTrip(trip);
        }
    });
