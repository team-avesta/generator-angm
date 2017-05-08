(function() {
    'use strict';

    angular.module('<%= slugifiedName %>')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route ($stateProvider) {
        <% if (angularMaterial) { %>
        $stateProvider
            .state('dashboard.<%= slugifiedName %>', {
                url: '/<%= slugifiedName %>',
                templateUrl: 'app/modules/<%= slugifiedName %>/<%= slugifiedName %>.html',
                controller: '<%= slugifiedNameCapitalize %>Ctrl',
                controllerAs: 'vm'
            });

        <% } else { %>
        $stateProvider
            .state('<%= slugifiedName %>', {
                url: '/<%= slugifiedName %>',
                templateUrl: 'app/modules/<%= slugifiedName %>/<%= slugifiedName %>.html',
                controller: '<%= slugifiedNameCapitalize %>Ctrl',
                controllerAs: 'vm'
            });
        <% } %>
    }
})();
