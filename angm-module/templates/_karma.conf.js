'use strict';

// Karma configuration
module.exports = function(config) {
    config.set({
        // Frameworks to use
        frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai'],

        // List of files / patterns to load in the browser
        files: [
            'src/bower_components/es5-shim/es5-shim.js',
            'src/bower_components/json3/lib/json3.min.js',
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-resource/angular-resource.js',
            'src/bower_components/angular-mocks/angular-mocks.js',
            'src/bower_components/angular-cookies/angular-cookies.js',
            'src/bower_components/angular-sanitize/angular-sanitize.js',
            'src/bower_components/angular-animate/angular-animate.js',
            'src/bower_components/angular-ui-router/release/angular-ui-router.js',
            'src/bower_components/angular-aria/angular-aria.js',
            'src/bower_components/angular-material/angular-material.js',
            'src/bower_components/angular-messages/angular-messages.js',
            'src/bower_components/angular-material-icons/angular-material-icons.js',
            'src/bower_components/v-accordion/dist/v-accordion.js',
            'src/bower_components/restangular/dist/restangular.js',
            'src/bower_components/team-avesta-angular-validation/dist/angular-validation.js',
            'src/bower_components/team-avesta-angular-validation/dist/angular-validation-rule.js',
            'src/bower_components/angular-validation-schema/angular-validation-schema.js',
            'app/app.js',
            'app/app.config.js',
            'app/modules/shared/shared.module.js',
            'app/modules/vendor/**.js',
            'app/modules/vendor/**/*.js',
            'app/modules/shared/sharedModule.js',
            'app/modules/shared/constants/*.js',
            'app/modules/shared/directives/**/*.js',
            'app/modules/shared/services/*.js',
            'app/modules/**/*.module.js',
            'app/modules/dashboard/**.js',
            'app/modules/shared/services/tests/**.js',
            <% _.each(arrayModules, function(module) { %>
            'app/modules/<%= module.name %>/<%= module.name %>module.js',
            'app/modules/<%= module.name %>/<%= module.name %>Ctrl.js',
            'app/modules/<%= module.name %>/<%= module.name %>Route.js',
            'app/modules/<%= module.name %>/<%= module.name %>Service.js',
            'app/modules/<%= module.name %>/<%= module.name %>Model.js',
            'app/modules/<%= module.name %>/<%= module.name %>.spec.js', <% }); %>
        ],

        // Test results reporter to use
        // Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        //reporters: ['progress'],
        reporters: ['spec'],

        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-sinon-chai',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-wiredep'
        ],

        // Web server port
        port: 9876,

        // Enable / disable colors in the output (reporters and logs)
        colors: true,

        // Level of logging
        // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // If true, it capture browsers, run tests and exit
        singleRun: true
    });
};
