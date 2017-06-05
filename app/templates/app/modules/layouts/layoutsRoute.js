(function() {
    'use strict';

    angular.module('layouts')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route($stateProvider) {

        $stateProvider
            .state('dashboard.layouts', {
                url: '/layouts',
                templateUrl: 'app/modules/layouts/layouts.html',
                controller: 'layoutsCtrl',
                controllerAs: 'vm'
            }).state('dashboard.layouts.1column', {
                url: '/1column',
                templateUrl: 'app/modules/layouts/html/1Column.html',
                controller: 'layoutsCtrl',
                controllerAs: 'vm'
            }).state('dashboard.layouts.2column', {
                url: '/2column',
                templateUrl: 'app/modules/layouts/html/1Column.html',
                controller: 'layoutsCtrl',
                controllerAs: 'vm'
            }).state('dashboard.layouts.3column', {
                url: '/3column',
                templateUrl: 'app/modules/layouts/html/1Column.html',
                controller: 'layoutsCtrl',
                controllerAs: 'vm'
            }).state('dashboard.layouts.horcenter', {
                url: '/horcenter',
                templateUrl: 'app/modules/layouts/html/1Column.html',
                controller: 'layoutsCtrl',
                controllerAs: 'vm'
            }).state('dashboard.layouts.vercenter', {
                url: '/vercenter',
                templateUrl: 'app/modules/layouts/html/1Column.html',
                controller: 'layoutsCtrl',
                controllerAs: 'vm'
            });
    }
})();
