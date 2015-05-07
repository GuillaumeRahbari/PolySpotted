/**
 * Master Controller
 */

angular.module('polySpottedApp')
    .controller('MasterCtrl', ['$scope', '$cookieStore', 'TagFactory', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, TagFactory) {

	$scope.loading = true;

	setTimeout(function() {TagFactory.getTags().then(
		function (data) { // success
			console.log(data);
			$scope.tags = data;
			$scope.loading = false;
		}, function (msg) { // error
			console.log('ERREUR : ', msg);
			$scope.loading = false;
		}
	);}, 1000);

	

}
