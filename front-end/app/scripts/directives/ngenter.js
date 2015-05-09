'use strict';

angular
    .module('polySpottedApp').directive('ngEnter', function ngEnter() {
    var ngenter = {
        link: function(scope, element, attrs) {
            element.bind('keydown', function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter);
                    });
                    event.preventDefault();
                }
            });
        }
    };
    return ngenter;
});
