'use strict';

/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('UserCtrl', ['$rootScope', '$routeParams', 'UserFactory', '$scope',
    function UserCtrl($rootScope, $routeParams, UserFactory, $scope) {

      $rootScope.title = $routeParams.author;

      UserFactory.getRevelationsByUser($routeParams.author).then(
        function (data) {
          $scope.revelations = data;
        }, function (msg) {
          console.log(msg);
        }
      );

}]);
