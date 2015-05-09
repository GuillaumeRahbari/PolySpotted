/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('TagsCtrl', ['$scope', '$rootScope', 'TagFactory', TagsCtrl]);

function TagsCtrl($scope, $rootScope, TagFactory) {

	//RevelationFactory.username = "delmotte";
	$rootScope.title = 'Les Tags';

  TagFactory.getTags().then(
    function (data) {
      $scope.tags = data;
    }, function (msg) {
      console.log(msg);
    }
  );

}
