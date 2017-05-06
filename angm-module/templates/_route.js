(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.route:<%= slugifiedName %>Route
     * @description
     * # <%= slugifiedName %>Route
     * Route of the app
     */

    angular.module('<%= slugifiedName %>')
        .config(<%= slugifiedNameCapitalize %>);

    <%= slugifiedNameCapitalize %>.$inject = ['$stateProvider'];

    function <%= slugifiedNameCapitalize %> ($stateProvider) {
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
