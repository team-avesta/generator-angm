(function() {
    'use strict';

    /**
     * @ngdoc index
     * @name app
     * @description
     * # app
     *
     * Main modules of the application.
     */

    angular.module('<%= nameApp %>', [
        'vendor',
        'layouts',
        'shared',
        'dashboard', <% _.each(arrayModules, function(module) { %>
        '<%= module.name %>', <% }); %>
    ]);

})();
