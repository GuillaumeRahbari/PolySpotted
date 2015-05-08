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
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/tables', {
      templateUrl: 'views/tables.html'
    })
    .when('/add', {
      templateUrl: 'views/add.html',
      controller: 'AddCtrl'
    })
    .when('/like', {
      templateUrl: 'views/like.html',
      controller: 'LikeCtrl'
    })
    .when('/dislike', {
      templateUrl: 'views/dislike.html',
      controller: 'DislikeCtrl'
    })
    .when('/tags', {
      templateUrl: 'views/tags.html',
      controller: 'TagsCtrl'
    })
    .when('/tags/:tagname', {
      templateUrl: 'views/tag.html',
      controller: 'TagCtrl'
    })
    .when('/users', {
      templateUrl: 'views/users.html',
      controller: 'UsersCtrl'
    })
    .when('/users/:author', {
      templateUrl: 'views/user.html',
      controller: 'UserCtrl'
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

    $rootScope.title = 'Home';
})
.value('$baseURL', 'http://localhost/PolySpotted/back-end/api.php');