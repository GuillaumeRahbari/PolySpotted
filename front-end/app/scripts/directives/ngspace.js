'use strict';

angular
    .module('polySpottedApp').directive('ngSpace', function ngSpace() {
    var ngspace = {
        link: function(scope, element, attrs) {
            element.bind('keydown', function(event) {
                if(event.which === 32) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngSpace);
                    });
                    event.preventDefault();
                }
            });
        }
    };
    return ngspace;
});
