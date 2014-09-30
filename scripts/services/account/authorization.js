'use strict';

tripExchange.factory('authorization', function(identity) {
    return {
        getAuthorizationHeader: function() {
            var currentUser = identity.getCurrentUser();
            if (!currentUser){
                return null;
            }
            return {
                'Authorization':  'Bearer ' + currentUser['access_token']
            }
        }
    }
});