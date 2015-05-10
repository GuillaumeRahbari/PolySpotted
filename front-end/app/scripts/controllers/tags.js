'use strict';

/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('TagsCtrl', ['$scope', '$rootScope', 'TagFactory','RevelationFactory',
    function TagsCtrl($scope, $rootScope, TagFactory, RevelationFactory) {

      //RevelationFactory.username = "delmotte";
      $rootScope.title = 'Les Tags';

      RevelationFactory.getRevelations().then(
        function (data) {
          $scope.revelations = data;
          TagFactory.getTags().then(
            function (data) {
              $scope.tags = [];
              for (var tag in data){
                var objet = {
                  tagName : data[tag],
                  nbOccurences : $scope.numberTag(data[tag])
                };
                $scope.tags.push(objet);
              }
              //console.log($scope.tags);
              console.log($scope.tags);
            }, function (msg) {
              console.log(msg);
            }
          );
          //console.log($scope.revelations);
        }, function (msg) {
          console.log(msg);
        }
      );

      $scope.numberTag = function(tag){
        var number = 0;
        console.log($scope.revelations);
        for (var revelation in $scope.revelations){
          console.log("cccc");
          for (var tag2 in $scope.revelations[revelation].tags){
            if (tag === $scope.revelations[revelation].tags[tag2]){
              number++;
              console.log("bbbbbbb");
            }
          }
        }
        return number;
      };



}]);
