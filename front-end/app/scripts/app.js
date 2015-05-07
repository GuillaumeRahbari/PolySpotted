'use strict';

/**
* @ngdoc overview
* @name polySpottedApp
* @description
* # polySpottedApp
*
* Main module of the application.
*/
angular
.module('polySpottedApp', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/dashboard.html',
      controller: 'MasterCtrl'
    })
    .when('/tables', {
      templateUrl: 'views/tables.html',
      controller: 'AlertsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.run(function ($rootScope, $cookieStore) {

    $rootScope.getWidth = function() {
        return window.innerWidth;
    };

    $rootScope.$watch($rootScope.getWidth, function(newValue, oldValue) {
        if (newValue >= 992) {
            $rootScope.toggle = true;
        } else {
            $rootScope.toggle = false;
        }
    });

    $rootScope.toggleSidebar = function() {
        $rootScope.toggle = !$rootScope.toggle;
        $cookieStore.put('toggle', $rootScope.toggle);
    };

    window.onresize = function() {
        $rootScope.$apply();
    };
})
.value('$baseURL', 'http://localhost/PolySpotted/back-end/api.php');