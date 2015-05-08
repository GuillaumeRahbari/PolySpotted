/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('DislikeCtrl', ['$rootScope', DislikeCtrl]);

function DislikeCtrl($rootScope) {

	$rootScope.title = 'Mes Dislikes';

}
