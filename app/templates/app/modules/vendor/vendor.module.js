(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.module:vendorModule
     * @description
     * # vendorModule
     * Module of the app
     */

    angular.module('vendor', [
        'ngResource',
        'ngAria',
        'ngMaterial',
        'ngMessages',
        'ngMdIcons',
        'ngAnimate',
        'ngSanitize',
        'ngCookies',
        'ui.router',
        'vAccordion'
    ]);

})();
