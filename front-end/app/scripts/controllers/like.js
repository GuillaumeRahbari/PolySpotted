'use strict';

/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('LikeCtrl', ['$rootScope', '$scope', 'RevelationFactory', '$route', '$window', '$timeout',
    function LikeCtrl($rootScope, $scope, RevelationFactory, $route, $window, $timeout) {

      $rootScope.title = 'Mes Likes';

      $scope.revelations = [];
      var ids = [];

      var recursiveLoad = function (index) {
        if (index < ids.length) {
          RevelationFactory.getRevelation(ids[index]).then(
            function (data) {
              $scope.revelations.push(data);
              recursiveLoad(index+1);
            }, function (msg) {
              console.log(msg);
              recursiveLoad(index+1);
            }
          );
        }
      };

      var recursiveReload = function () {
        $scope.revelations = [];
        ids = [];
        for (var i = 0; i < 10000; i++) {
          if (localStorage.getItem('votefor'+i) === 'plus') {
            ids.push(i);
          }
        }
        recursiveLoad(0);
      };

      recursiveReload();

      $scope.vote = function (id, bool) {
        RevelationFactory.voteForRevelation(id,bool).then(
          function () {
            $route.reload();
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
