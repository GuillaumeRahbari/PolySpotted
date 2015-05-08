/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('LikeCtrl', ['$rootScope', LikeCtrl]);

function LikeCtrl($rootScope) {

	$rootScope.title = 'Mes Likes';

}
