(function() {
    'use strict';

    angular.module('shared').directive('loadingSpinnerDialogDirective', directive);

    function directive(pubSubService, eventsConstantService) {
        var directive = {
            link: link,
            templateUrl: 'loadingSpinner.html',
            restrict: 'E',
            replace: true,
            scope: {
                notloading: "="
            }
        };
        return directive;

        //////////////////

        function link(scope, element, attrs) {
            //console.log(scope.notloading)
            if (!scope.notloading) {
                element.addClass('hidden')
            }
            scope.showHandle = pubSubService.subscribe(eventsConstantService.message._SHOW_DIALOG_LOADING_SPINNER_, showRequestHandler);
            scope.hideHandle = pubSubService.subscribe(eventsConstantService.message._HIDE_DIALOG_LOADING_SPINNER_, hideRequestHandler);

            function showRequestHandler() {
                ////console.log('asdadsasdsa')
                element.removeClass('hidden');
            }

            function hideRequestHandler() {
                element.addClass('hidden');
            }

            scope.$on('$destroy', function() {
                pubSubService.unsubscribe(scope.showHandle);
                pubSubService.unsubscribe(scope.hideHandle);
            });
        }
    }
})();
