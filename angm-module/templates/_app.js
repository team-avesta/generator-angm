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
        'shared',
        'dashboard',
        'layouts',
        'notification',
        'login',
        'otp',
        'forgotPassword',
        'registration', <% _.each(arrayModules, function(module) { %>
        '<%= module.name %>', <% }); %>
    ]);

})();
