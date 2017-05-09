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

    angular.module('<%= nameApp %>', [<% _.each(arrayModules, function(module) { %>
        '<%= module.name %>', <% }); %>
        'dashboard'
    ]);

})();
