'use strict';

/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('UsersCtrl', ['$rootScope', 'UserFactory', '$scope',
    function UsersCtrl($rootScope, UserFactory, $scope) {


      $rootScope.title = 'Utilisateurs';

      UserFactory.getUsers().then(
        function (data) {
          $scope.users = data;
          console.log($scope.users);
        }, function (msg) {
          console.log(msg);
        }
      );

}]);
