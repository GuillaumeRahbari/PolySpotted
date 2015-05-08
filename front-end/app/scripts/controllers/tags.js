/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('TagsCtrl', ['$rootScope', TagsCtrl]);

function TagsCtrl($rootScope) {

	//RevelationFactory.username = "delmotte";
	$rootScope.title = 'Les Tags';

}
