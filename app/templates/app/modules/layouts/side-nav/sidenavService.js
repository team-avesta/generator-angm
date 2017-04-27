(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:menuService
     * @description
     * # menuService
     * Service of the app
     */

    angular
        .module('<%= slugifiedAppName %>')
        .factory('MenuService', Menu);

    // Inject your dependencies as .$inject = ['$http', '$otherDependency'];
    // function Name ($http, $otherDependency) {...}

    Menu.$inject = ['$http'];

    function Menu($http) {
        // Sample code.

        return {};

    }

})();
