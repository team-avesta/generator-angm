(function() {
    'use strict';

    angular.module('dashboard')
        .config(route);

    route.$inject = ['$stateProvider', 'stateConstantService'];

    function route($stateProvider, stateConstantService) {

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
        .state(stateConstantService.HOME, {
            url: '/',
            templateUrl: 'app/modules/home/home.html',
        });
        <% } %>
    }
})();
