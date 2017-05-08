(function() {
    'use strict';

    angular.module('dashboard')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route($stateProvider) {
        $stateProvider
            <% if (angularMaterial) { %>
            .state('dashboard', {
                url: '',
                abstract: true,
                templateUrl: 'app/modules/dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'vm'
            })
            .state('dashboard.home', {
                url: '/home',
                //template: '<ui-view/>'
                templateUrl: 'app/modules/dashboard/home.html'
            });
        <% } else { %>
        .state('home', {
            url: '/',
            templateUrl: 'app/modules/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
        });
        <% } %>
    }
})();
