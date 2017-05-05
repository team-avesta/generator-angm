(function() {
    'use strict';
    angular
        .module('shared')
        .factory('errorService', errorsService);

    function errorsService(PubSubService, events, $rootScope) {
        var errorMessages = {};

        var errors = {
            init: init,
            addErrorMessageHandler: addErrorMessageHandler
        };

        return errors;

        ////////////////

        function init() {
            errorMessages = {};
            PubSubService.subscribe(events.message._ADD_ERROR_MESSAGE_, errors.addErrorMessageHandler);
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
                        //PubSubService.publish(events.message._DISPLAY_POPUP_, [messageText]);
                        PubSubService.publish(events.message._SHOW_FAILURE_TOAST_MESSAGE_, [{
                            message: errorMessages
                        }]);
                        break;
                    }
                case 'dialog':
                    {
                        //PubSubService.publish(events.message._DISPLAY_CONFIRMATION_DIALOG_, [messageText]);
                        PubSubService.publish(events.message._SHOW_FAILURE_DIALOG_MESSAGE_, [{
                            message: errorMessages
                        }]);
                        break;
                    }
                default:
                    {
                        PubSubService.publish(events.message._SHOW_FAILURE_TOAST_MESSAGE_, [{
                            message: errorMessages
                        }]);
                        break;
                    }
            }
        }
    }
})();
