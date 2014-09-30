'use strict';

tripExchange.factory('StatResource', function ($log, baseUrl, $resource) {
    var baseServiceUrl = baseUrl + '/api/stats';
    return $resource(baseServiceUrl, null);
});