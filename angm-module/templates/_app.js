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
        /*'ngResource',
        'ngAria',
        <% if (angularBootstrap) { %> 'ui.bootstrap',
        <% } if (angularMaterial) { %> 'ngMaterial',
        'ngMdIcons',<% } %>
        <% if (angularCookies) { %>'ngCookies',
        <% } if (angularAnimate) { %>'ngAnimate',
        <% } if (angularBootstrap) { %>'ngTouch',
        <% } if (angularSanitize) { %>'ngSanitize',
        <% } %>'ui.router',*/
        'vendor',
        'layouts',
        'shared',
        'dashboard', <% _.each(arrayModules, function(module) { %>
        '<%= module.name %>', <% }); %>
    ]);

})();
