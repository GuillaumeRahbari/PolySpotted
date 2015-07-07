'use strict';

/**
 * Widget Directive
 */

angular
    .module('polySpottedApp')
    .directive('rdWidget', function rdWidget() {

    var directive = {
        transclude: true,
        template: '<div class="widget" ng-transclude></div>',
        restrict: 'EA'
    };
    return directive;
});
