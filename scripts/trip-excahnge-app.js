'use strict';

var tripExchange = angular
    .module('tripExchange', ['ngResource', 'ngRoute', 'ngCookies'])
    .config(function ($routeProvider) {

        var routeUserChecks = {
            authenticated: {
                authenticate: function (auth) {
                    return auth.isAuthenticated();
                }
            }
        };

        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html'
            })
            .when('/login', {
                templateUrl: 'templates/login.html'
            })
            .when('/drivers/:id', {
                templateUrl: 'templates/driver-details.html',
                resolve: routeUserChecks.authenticated
            })
            .when('/drivers', {
                templateUrl: 'templates/drivers.html'
            })
            .when('/trips/create', {
                templateUrl: 'templates/create.html',
                resolve: routeUserChecks.authenticated
            })
            .when('/trips/:id', {
                templateUrl: 'templates/trip-detail.html',
                resolve: routeUserChecks.authenticated
            })
            .when('/trips', {
                templateUrl: 'templates/trips.html'
            })
            .when('/register', {
                templateUrl: 'templates/register.html'
            })
            .when('/unauthorized', {
                templateUrl: 'templates/unauthorized.html'
            })

            .otherwise({redirectTo: '/'});
    })
    .value('toastr', toastr)
    .constant('baseUrl', 'http://spa2014.bgcoder.com')
    .constant('author', 'Webdude')
    .constant('appName', 'Trip Exchange')
    .run(function ($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function (ev, current, previous, rejection) {
            if (rejection === 'not authorized') {
                $location.path('/unauthorized');
            }
        })
    });