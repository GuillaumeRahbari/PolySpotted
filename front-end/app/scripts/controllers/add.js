'use strict';

/**
 * Add Controller
 */

angular.module('polySpottedApp')
    .controller('AddCtrl', ['$scope', '$cookieStore', 'RevelationFactory', '$rootScope',
    function AddCtrl($scope, $cookieStore, RevelationFactory, $rootScope) {

    //RevelationFactory.username = "delmotte";
    $rootScope.title = 'Révéler un secret';

      angular.element('#addSuccess, #addError').css('display','none');

    $scope.taglist = [];

    $scope.addTag = function () {
      if ($scope.tagtoadd && $scope.taglist.indexOf($scope.tagtoadd) < 0) {
        $scope.taglist.push($scope.tagtoadd);
        $scope.tagtoadd = '';
      }
    };

    $scope.addRevelation = function () {
      if (!$scope.revelation) {
        return;
      }
      if ($scope.taglist.length < 1) {
        return;
      }
      if (!$scope.password) {
        $scope.password = '';
      }
      RevelationFactory.createRevelation($scope.revelation, $scope.password, $scope.author).then(
        function (data) {
          recursiveTagAdd(data.id, 0);
        }, function (msg) {
          angular.element('#addError').css('display','block');
          angular.element('#addSuccess').css('display','none');
          angular.element('#addError').html(msg);
        }
      );
    };

    var recursiveTagAdd = function (id, index) {
      if (index < $scope.taglist.length) {
        RevelationFactory.addTag(id, $scope.taglist[index]).then(
          function () {
            recursiveTagAdd(id, index+1);
          }, function (msg) {
            angular.element('#addError').css('display','block');
            angular.element('#addSuccess').css('display','none');
            angular.element('#addError').html(msg);
          }
        );
      } else {
        $scope.taglist = [];
        $scope.author = '';
        $scope.revelation = '';
        $scope.password = '';
        $scope.tagtoadd = '';
        angular.element('#addError').css('display','none');
        angular.element('#addSuccess').css('display','block');
      }

    };

}]);
