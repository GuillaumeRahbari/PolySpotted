/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('AddCtrl', ['$scope', '$cookieStore', 'RevelationFactory', AddCtrl]);

function AddCtrl($scope, $cookieStore, RevelationFactory) {

	//RevelationFactory.username = "delmotte";

	$scope.taglist = [];

	$scope.addTag = function () {
		console.log("add");
		if ($scope.tagtoadd && $scope.taglist.indexOf($scope.tagtoadd) < 0) {
			$scope.taglist.push($scope.tagtoadd);
			$scope.tagtoadd = "";
		}
	}

	$scope.addRevelation = function () {
		if (!$scope.revelation) {
			console.log("error no revelation");
			return;
		}
		if ($scope.taglist.length < 1) {
			console.log("error no tag");
			return;
		}
		if (!$scope.password) {
			$scope.password = "";
		}
		RevelationFactory.createRevelation($scope.revelation, $scope.password, $scope.author).then(
			function (data) {
				console.log("ajouté avec succès");
				recursiveTagAdd(data.id, 0);
			}, function (msg) {
				console.log(msg);
			}
		);
	}

	var recursiveTagAdd = function (id, index) {
		if (index < $scope.taglist.length) {
			RevelationFactory.addTag(id, $scope.taglist[index]).then(
				function (data) {
					console.log("tag ajouté");
					recursiveTagAdd(id, index+1);
				}, function (msg) {
					console.log("erreur lors de l'ajout de tag");
				}
			);
		} else {
			$scope.taglist = [];
		}
		
	}

}
