'use strict';

tripExchange.factory('DriversResource', function ($log, $http, baseUrl, $resource, notifier, authorization) {
    var baseServiceUrl = baseUrl + '/api/drivers';
    var driverServiceEndPoint = baseServiceUrl + '?page=:page&username=:username';

    return{
        driversInfo: $resource(driverServiceEndPoint, null, {
            "getPrivate": {
                method: 'GET',
                params: { page: '@page', username: '@username' },
                isArray: true,
                headers: authorization.getAuthorizationHeader()
            },
            "getPublic": {
                method: 'GET',
                params: { page: '@page', username: '@username' },
                isArray: true
            }
        }),
        getDriverDetail: function (id) {
            return $http.get(baseServiceUrl + '/' + id, {headers: authorization.getAuthorizationHeader()});
        }
    }
});