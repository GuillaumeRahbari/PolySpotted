'use strict';

/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('TagsCtrl', ['$scope', '$rootScope', 'TagFactory','RevelationFactory', function TagsCtrl($scope, $rootScope, TagFactory, RevelationFactory) {

    //RevelationFactory.username = "delmotte";
    $rootScope.title = 'Les Tags';

    TagFactory.getTags().then(
      function (data) {
        $scope.tags = data;
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

    $scope.numberTag = function(tag){
      var number = 0;
      for (var revelation in $scope.revelations){
        for (var tag2 in $scope.revelations[revelation].tags){
          if (tag === $scope.revelations[revelation].tags[tag2]){
            number++;
          }
        }
      }
      return number;
    };

}]);
