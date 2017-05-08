(function() {
    'use strict';

    angular
        .module('shared')
        .directive('focusMeDirective', directive);

    function directive() {
        return {
            link: function(scope, elem, attrs, ngModel) {
                elem[0].focus();
            }
        };
    }
})();
