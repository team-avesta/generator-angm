(function() {
    'use strict';

    angular.module('shared').directive('inputLimitDirective', directive);

    function directive() {
        var directive = {
            link: link,
            restrict: 'A',
            replace: true,
        };
        return directive;

        function link(scope, elem, attrs) {
            var limit = parseInt(attrs.inputLimit);
            angular.element(elem).on("keypress", function(e) { // eslint-disable-line angular/avoid-scope-typos
                //replace the last digit with the latest input digit by user
                //this.value = this.value.substring(0, limit - 1);

                var key;
                if (e.which === null) {
                    // IE
                    key = e.keyCode;
                }
                if (e.which !== 0) {
                    // all but IE
                    key = e.which;
                }
                //check for backspace or delete key.
                //prevent event if length is already at limit and key pressed is not backspace or delete
                if (this.value.length === limit && (key !== 8 && key !== 46)) {
                    e.preventDefault();
                }
            });
        }
    }
})();
