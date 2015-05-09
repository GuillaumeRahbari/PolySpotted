'use strict';

/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('TagCtrl', ['$rootScope', '$routeParams', function TagCtrl($rootScope, $routeParams) {

	$rootScope.title = '#' + $routeParams.tagname;

}]);
