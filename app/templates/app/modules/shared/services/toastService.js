//init this service in app.js
(function() {
    'use strict';
    angular.module('shared')
        .factory('toastService', service);

    function service($mdToast, pubSubService, eventsConstantService) {

        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };
        var toastPosition = angular.extend({}, last);

        var ToastService = {
            init: init,
            successToast: successToast,
            failureToast: failureToast,
            getToastPosition: getToastPosition,
            sanitizePosition: sanitizePosition,
            customToast: customToast
        };

        return ToastService;

        ////////////////////

        function init() {
            pubSubService.subscribe(eventsConstantService.message._SHOW_SUCCESS_TOAST_MESSAGE_, ToastService.successToast);
            pubSubService.subscribe(eventsConstantService.message._SHOW_FAILURE_TOAST_MESSAGE_, ToastService.failureToast);
        }

        function sanitizePosition() {
            var current = toastPosition;

            if (current.bottom && last.top) {
                current.top = false;
            }
            if (current.top && last.bottom) {
                current.bottom = false;
            }
            if (current.right && last.left) {
                current.left = false;
            }
            if (current.left && last.right) {
                current.right = false;
            }
            last = angular.extend({}, current);
        }

        function getToastPosition() {
            ToastService.sanitizePosition();
            return Object.keys(toastPosition)
                .filter(function(pos) {
                    return toastPosition[pos];
                })
                .join(' ');
        }

        function successToast(data) {
            $mdToast.show(
                $mdToast.simple()
                .content(data.message)
                .position(ToastService.getToastPosition())
                .hideDelay(1000)
                .toastClass('md-success-toast-theme')
            );
        }

        function failureToast(data) {
            $mdToast.show(
                $mdToast.simple()
                .content(data.message)
                .position(ToastService.getToastPosition())
                .hideDelay(3000)
               .toastClass('md-failure-toast-theme')
            );
        }

        function customToast(message) {
            $mdToast.show(
                $mdToast.simple()
                .content(message)
                //.position(ToastService.getToastPosition())
                .hideDelay(3000)
                //.theme('failure-toast')
            );
        }

    }
})();
