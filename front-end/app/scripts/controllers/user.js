'use strict';

/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('UserCtrl', ['$rootScope', '$routeParams', 'UserFactory', '$scope', 'RevelationFactory', '$timeout', '$window',
    function UserCtrl($rootScope, $routeParams, UserFactory, $scope, RevelationFactory, $timeout, $window) {

      $rootScope.title = $routeParams.author;

      UserFactory.getUser($routeParams.author).then(
        function (data) {
          $scope.user = data;
        }, function (msg) {
          console.log(msg);
        }
      );

      $scope.vote = function (id, bool) {
        RevelationFactory.voteForRevelation(id,bool).then(
          function (data) {
            for (var i in $scope.user.revelations) {
              if ($scope.user.revelations[i].id === id) {
                $scope.user.revelations[i] = data;
                break;
              }
            }
          }, function (msg) {
            console.log(msg);
          }
        );
      };

      $scope.hasVoted = function (id, bool) {
        return (bool && localStorage.getItem('votefor'+id) === 'plus') || (!bool && localStorage.getItem('votefor'+id) === 'moins');
      };

      $scope.openModal = function (id) {
        $scope.todelete = id;
        angular.element('#passwordModal').modal('show');
        $scope.password = '';
        angular.element('#deleteSuccess').css('display','none');
        angular.element('#deleteError').css('display','none');
      };

      $scope.deleteRevelation = function () {
        if ($scope.todelete) {
          if (!$scope.password) {
            $scope.password = '';
          }
          RevelationFactory.deleteRevelation($scope.todelete, $scope.password).then(
            function () {
              angular.element('#deleteError').css('display','none');
              angular.element('#deleteSuccess').css('display','block');
              $timeout(function() {$window.location.reload();},1000);
            }, function (msg) {
              angular.element('#deleteError').html(msg);
              angular.element('#deleteError').css('display','block');
            }
          );
        }
      };

}]);
