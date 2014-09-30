'use strict';

tripExchange.factory('CitiesResource', function ($log, baseUrl, $resource) {
    var baseServiceUrl = baseUrl + '/api/cities';

    return $resource(baseServiceUrl, null, {
        'allCities': {
            method: 'GET',
            isArray: true
        }
    });
});