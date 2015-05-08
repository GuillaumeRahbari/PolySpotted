/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('TagCtrl', ['$rootScope', '$routeParams', TagCtrl]);

function TagCtrl($rootScope, $routeParams) {

	$rootScope.title = '#' + $routeParams.tagname;

}
