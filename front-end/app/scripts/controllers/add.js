/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('AddCtrl', ['$scope', '$cookieStore', 'RevelationFactory', '$rootScope', AddCtrl]);

function AddCtrl($scope, $cookieStore, RevelationFactory, $rootScope) {

	//RevelationFactory.username = "delmotte";
	$rootScope.title = 'Révéler un secret';

	$("#addSuccess, #addError").css('display','none');

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
				recursiveTagAdd(data.id, 0);
			}, function (msg) {
				$("#addError").css('display','block');
				$("#addSuccess").css('display','none');
				$("#addError").html(msg);
			}
		);
	}

	var recursiveTagAdd = function (id, index) {
		if (index < $scope.taglist.length) {
			RevelationFactory.addTag(id, $scope.taglist[index]).then(
				function (data) {
					recursiveTagAdd(id, index+1);
				}, function (msg) {
					$("#addError").css('display','block');
					$("#addSuccess").css('display','none');
					$("#addError").html(msg);
				}
			);
		} else {
			$scope.taglist = [];
			$scope.author = "";
			$scope.revelation = "";
			$scope.password = "";
			$scope.tagtoadd = "";
			$("#addError").css('display','none');
			$("#addSuccess").css('display','block');
		}
		
	}

}
