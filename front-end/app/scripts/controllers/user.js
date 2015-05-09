'use strict';

/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('UserCtrl', ['$rootScope', '$routeParams', function UserCtrl($rootScope, $routeParams) {

	$rootScope.title = $routeParams.author;

}]);
