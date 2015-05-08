/**
 * Master Controller
 */

angular.module('polySpottedApp')
    .controller('HomeCtrl', ['$scope', '$cookieStore', 'TagFactory', 'RevelationFactory', 'UserFactory', '$timeout', '$window', '$rootScope', HomeCtrl]);

function HomeCtrl($scope, $cookieStore, TagFactory, RevelationFactory, UserFactory, $timeout, $window, $rootScope) {

	$rootScope.title = 'Home';

	TagFactory.getTags().then(
		function (data) {
			$scope.tags = data;
		}, function (msg) {
			console.log(msg);
		}
	);

	UserFactory.getUsers().then(
		function (data) {
			$scope.users = data;
		}, function (msg) {
			console.log(msg);
		}
	);

	RevelationFactory.getRevelations().then(
		function (data) {
			$scope.revelations = data;
		}, function (msg) {
			console.log(msg);
		}
	);

	$scope.vote = function (id, bool) {
		RevelationFactory.voteForRevelation(id,bool).then(
			function (data) {
				for (var i in $scope.revelations) {
					if ($scope.revelations[i].id == id) {
						$scope.revelations[i] = data;
						break;
					}
				}
			}, function (msg) {
				console.log(msg);
			}
		);
	}

	$scope.hasVoted = function (id, bool) {
		return (bool && localStorage.getItem("votefor"+id) === "plus")
		|| (!bool && localStorage.getItem("votefor"+id) === "moins");
	}

	$scope.openModal = function (id) {
		$scope.todelete = id;
		$('#passwordModal').modal('show');
		$scope.password = "";
		$('#deleteSuccess').css('display','none');
		$('#deleteError').css('display','none');
	}

	$scope.deleteRevelation = function () {
		if ($scope.todelete) {
			if (!$scope.password) {
				$scope.password = "";
			}
			RevelationFactory.deleteRevelation($scope.todelete, $scope.password).then(
				function (data) {
					$('#deleteSuccess').css('display','block');
					$timeout(function() {$window.location.reload();},1000);
				}, function (msg) {
					$('#deleteError').html(msg);
					$('#deleteError').css('display','block');
				}
			);
		}
	}
}
