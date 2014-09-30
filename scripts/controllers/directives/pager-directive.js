'use strict';
tripExchange.directive('pager', function () {
    return {
        restrict: 'EA',
        templateUrl: 'templates/directives/pager.html',
        replace: true
    }
});
