tripExchange.factory('auth', function ($http, $q, identity, authorization, baseUrl) {
    var baseUserRoute = '/api/users/';
    var logoutRoute = baseUrl + baseUserRoute + 'logout';
    var loginRoute = baseUrl + baseUserRoute + 'login';
    var registerRoute = baseUrl + baseUserRoute + 'register';
    var userInfoRoute = baseUrl + baseUserRoute + 'userInfo';

    function logout() {
        var deferred = $q.defer();
        identity.setCurrentUser(undefined);
        var headers = authorization.getAuthorizationHeader();
        $http.post(logoutRoute, {}, { headers: headers }).success(function () {
            deferred.resolve();
        });

        return deferred.promise;
    }

    function getUserInfo() {
        var deferred = $q.defer();
        var headers = authorization.getAuthorizationHeader();
        $http.get(userInfoRoute, { headers: headers }).success(function () {
            deferred.resolve();
        });

        return deferred.promise;
    }

    function register(user) {
        var deferred = $q.defer();

        $http.post(registerRoute, user)
            .success(function () {
                deferred.resolve();
            }, function (response) {
                deferred.reject(response);
            });

        return deferred.promise;
    }

    function login(user) {
        var deferred = $q.defer();
        user['grant_type'] = 'password';
        $http.post(loginRoute, 'username=' + user.username + '&password=' + user.password +
            '&grant_type=password', { headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
            .success(function (response) {
                if (response["access_token"]) {
                    identity.setCurrentUser(response);
                    deferred.resolve(true);
                }
                else {
                    deferred.resolve(false);
                }
            });

        return deferred.promise;
    }

    function isAuthenticated() {
        if (identity.isAuthenticated()) {
            return true;
        }
        else {
            return $q.reject('not authorized');
        }
    }

    return {
        logout: logout,
        login: login,
        isAuthenticated: isAuthenticated,
        register: register,
        getUserInfo: getUserInfo
    }
});