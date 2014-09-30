'use strict';

tripExchange.factory('TripsResource', function ($log, $http, baseUrl, $resource, notifier, authorization) {
    var baseServiceUrl = baseUrl + '/api/trips';
    var tripServiceEndpoint = baseServiceUrl + '?page=:page&orderBy=:orderBy&orderType=:orderType' +
        '&from=:from&to=:to&finished=:finished&onlyMine=:onlyMine';

    return {
        tripsService: $resource(tripServiceEndpoint, null, {
            "getPublic": {
                method: 'GET',
                isArray: true
            },
            'getBy': {
                method: 'GET',
                params: { page: '@page', orderBy: '@orderBy', orderType: '@orderType', from: '@from',
                    to: '@to', finished: '@finished', onlyMine: '@onlyMine'},
                isArray: true,
                headers: authorization.getAuthorizationHeader()
            }
        }),
        postTrip: function (tripData) {
            return $http.post(baseServiceUrl, tripData, {headers: authorization.getAuthorizationHeader()});
        },
        getTripById: function (id) {
            return $http.get(baseServiceUrl + '/' + id, {headers: authorization.getAuthorizationHeader()});
        },
        joinById: function (id) {
            return $http.put(baseServiceUrl + '/' + id, {}, {headers: authorization.getAuthorizationHeader()});
        }
    }
});