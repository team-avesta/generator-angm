(function() {
    'use strict';

    angular
        .module('shared')
        .directive('focusMe', focusMe);

    function focusMe() {
        return {
            link: function(scope, elem, attrs, ngModel) {
                elem[0].focus();
            }
        };
    }
})();
