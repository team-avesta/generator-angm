(function() {
    'use strict';

    angular.module('shared').directive('loadingSpinner', loadingSpinner);

    function loadingSpinner(pubSubService, eventsConstantService) {
        var directive = {
            link: link,
            templateUrl: 'app/modules/shared/directives/loadingSpinner/loadingSpinner.html',
            restrict: 'E',
            replace: true
        };
        return directive;

        function link(scope, element, attrs) {
            element.addClass('hidden');

            scope.showRequestHandler = showRequestHandler;
            scope.hideRequestHandler = hideRequestHandler;

            scope.textvalue = 'Please wait...';

            scope.showHandle = pubSubService.subscribe(eventsConstantService.message._SHOW_LOADING_SPINNER_, scope.showRequestHandler);
            scope.hideHandle = pubSubService.subscribe(eventsConstantService.message._HIDE_LOADING_SPINNER_, scope.hideRequestHandler);

            scope.$on('$destroy', function() {
                pubSubService.unsubscribe(scope.showHandle);
                pubSubService.unsubscribe(scope.hideHandle);
            });

            function showRequestHandler(value) {
                //console.log('show')
                if (!value) {
                    scope.textvalue = 'Please wait...';
                } else {
                    scope.textvalue = value;
                }
                element.removeClass('hidden');
            }

            function hideRequestHandler() {
                //console.log('hide')
                element.addClass('hidden');
            }
        }
    }
})();
