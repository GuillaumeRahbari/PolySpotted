/**
 * Master Controller
 */

angular.module('polySpottedApp')
    .controller('MasterCtrl', ['$scope', '$cookieStore', 'TagFactory', 'RevelationFactory', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, TagFactory, RevelationFactory) {

	$scope.loading = true;

	//RevelationFactory.username = "delmotte";

	/*RevelationFactory.voteForRevelation(2,false).then(
		function (data) {
			console.log(data);
		}, function (msg) {
			console.log(msg);
		}
	);*/

	/*TagFactory.getTags().then(
		function (data) { // success
			console.log(data);
			$scope.tags = data;
			$scope.loading = false;
		}, function (msg) { // error
			console.log('ERREUR : ', msg);
			$scope.loading = false;
		}
	);*/

	

}
