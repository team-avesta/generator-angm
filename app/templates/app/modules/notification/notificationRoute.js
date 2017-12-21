(function() {
    'use strict';

    angular.module('notification')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route ($stateProvider) {
        
        $stateProvider
            .state('dashboard.notification', {
                url: '/notification',
                templateUrl: 'app/modules/notification/notification.html',
                controller: 'notificationCtrl',
                controllerAs: 'vm'
            });

        
    }
})();
