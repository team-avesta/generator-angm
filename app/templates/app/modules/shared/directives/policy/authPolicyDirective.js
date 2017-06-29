/**
 * author - Chirag
 * created at - 28-06-2017
 * The directive removes the element from DOM if the logged In user do not have permission to
 * access that element.
 * Example Usage - Include following in the element that has authorized access:
 * <md-button policies="['programmes.write', 'programmes.all']" class="md-accent">Accent Button</md-button>
 *
 */
(function() {
    'use strict';

    angular
        .module('shared')
        .directive('policies', directive);

    function directive(authService) {
        return {
            restrict: "A",
            scope: {
                policies: '='
            },

            link: function(scope, elem, attrs, _, transclude) {
                if (!authService.userHasPolicy(scope.policies)) {
                    scope.$destroy();
                    scope = null;
                    elem.remove();
                    elem = null;
                }
            }
        }
    }
})();
