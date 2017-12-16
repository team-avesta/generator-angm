(function() {
    'use strict';
    angular
        .module('shared')
        .factory('errorService', service);

    function service(pubSubService, eventsConstantService, $rootScope) {
        var errorMessages = {};

        var errors = {
            init: init,
            addErrorMessageHandler: addErrorMessageHandler
        };

        return errors;

        ////////////////

        function init() {
            errorMessages = {};
            pubSubService.subscribe(eventsConstantService.message._ADD_ERROR_MESSAGE_, errors.addErrorMessageHandler);
        }

        function addErrorMessageHandler(data) {
            if (!errorMessages) {
                errorMessages = {};
            }

            errorMessages = data.message;
            var type = data.type;
            var status = data.status;
            if (status === 401) {
                $rootScope.$broadcast('unauthorized');
            }

            switch (type) {
                case 'toast':
                    {
                        //pubSubService.publish(eventsConstantService.message._DISPLAY_POPUP_, [messageText]);
                        pubSubService.publish(eventsConstantService.message._SHOW_FAILURE_TOAST_MESSAGE_, [{
                            message: errorMessages
                        }]);
                        break;
                    }
                case 'dialog':
                    {
                        //pubSubService.publish(eventsConstantService.message._DISPLAY_CONFIRMATION_DIALOG_, [messageText]);
                        pubSubService.publish(eventsConstantService.message._SHOW_FAILURE_DIALOG_MESSAGE_, [{
                            message: errorMessages
                        }]);
                        break;
                    }
                default:
                    {
                        pubSubService.publish(eventsConstantService.message._SHOW_FAILURE_TOAST_MESSAGE_, [{
                            message: errorMessages
                        }]);
                        break;
                    }
            }
        }
    }
})();
