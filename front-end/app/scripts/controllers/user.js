/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('UserCtrl', ['$rootScope', '$routeParams', UserCtrl]);

function UserCtrl($rootScope, $routeParams) {

	$rootScope.title = $routeParams.author;

}
