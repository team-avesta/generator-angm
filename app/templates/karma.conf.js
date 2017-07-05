'use strict';

// Karma configuration
module.exports = function(config) {
    config.set({
        // Frameworks to use
        frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai', 'wiredep'],

        // List of files / patterns to load in the browser
        files: [
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
            'app/modules/shared/services/tests/**.js'
        ],

        // Test results reporter to use
        // Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        //reporters: ['progress'],
        reporters: ['spec'],

        // Web server port
        port: 9876,

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
