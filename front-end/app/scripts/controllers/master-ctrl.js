/**
 * Master Controller
 */

angular.module('polySpottedApp')
    .controller('MasterCtrl', ['$scope', '$cookieStore', 'ExampleFactory', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, ExampleFactory) {

	$scope.loading = true;

	setTimeout(function() {ExampleFactory.getTags().then(
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
