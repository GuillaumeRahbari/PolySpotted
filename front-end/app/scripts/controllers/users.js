/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('UsersCtrl', ['$rootScope', UsersCtrl]);

function UsersCtrl($rootScope) {

	$rootScope.title = 'Utilisateurs';

}
