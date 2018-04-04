'use strict';
var util = require('util');
var generators = require('yeoman-generator');
var path = require('path');
var chalk = require('chalk');
var yosay = require('yosay');
var slugify = require("underscore.string/slugify");
var _ = require('underscore');
_.mixin(require('underscore.inflections'));
var mkdirp = require('mkdirp');

var AngmGenerator = generators.Base.extend({

    init: function() {

        this.pkg = require('../package.json');

        // Greetings to the user.
        this.log(yosay(
            'Welcome to ' + chalk.red('official Generator Angm Material') + ' generator!'
        ));
    },

    askForApplicationDetails: function() {
        var done = this.async();

        var prompts = [{
            name: 'appName',
            message: 'What would you like to call your application?',
            default: 'Ang-modular'
        }, {
            name: 'appDescription',
            message: 'How would you describe your application?',
            default: 'Modular AngularJS with Angm-generator'
        }, {
            name: 'appKeywords',
            message: 'How would you describe your application in comma seperated key words?',
            default: 'AngularJS, Yeoman-Generator'
        }, {
            name: 'appAuthor',
            message: 'What is your company/author name?',
            default: 'Angmodular'
        }];

        this.prompt(prompts, function(props) {
            this.appName = props.appName;
            this.appDescription = props.appDescription;
            this.appKeywords = props.appKeywords;
            this.appAuthor = props.appAuthor;

            this.slugifiedAppName = slugify(this.appName);
            this.humanizedAppName = _.titleize(this.appName);
            this.capitalizedAppAuthor = _.camelize(this.appAuthor);

            this.config.set('appName', this.slugifiedAppName);

            done();
        }.bind(this));
    },

    askForAngularApplicationModules: function() {
        var done = this.async();

        var prompts = [{
            type: 'checkbox',
            name: 'modules',
            message: 'Which AngularJS modules would you like to include?',
            choices: [{
                value: 'angularCookies',
                name: 'ngCookies',
                checked: true
            }, {
                value: 'angularAnimate',
                name: 'ngAnimate',
                checked: true
            }, {
                value: 'angularSanitize',
                name: 'ngSanitize',
                checked: true
            }]
        }];

        this.prompt(prompts, function(props) {
            this.angularCookies = _.contains(props.modules, 'angularCookies');
            this.angularAnimate = _.contains(props.modules, 'angularAnimate');
            this.angularSanitize = _.contains(props.modules, 'angularSanitize');

            this.config.set('angularCookies', this.angularCookies);
            this.config.set('angularAnimate', this.angularAnimate);
            this.config.set('angularSanitize', this.angularSanitize);

            done();
        }.bind(this));
    },

    askForUIApplicationModules: function() {
        var done = this.async();

        var prompts = [{
            type: 'checkbox',
            name: 'ui',
            message: 'Which UI Frameworkwould you like to include?',
            choices: [{
                value: 'angularBootstrap',
                name: 'Angular UI Bootstrap',
                checked: false
            }, {
                value: 'angularMaterial',
                name: 'Angular Material',
                checked: true
            }]
        }];

        this.prompt(prompts, function(props) {
            this.angularBootstrap = _.contains(props.ui, 'angularBootstrap');
            this.angularMaterial = _.contains(props.ui, 'angularMaterial');


            if (this.angularBootstrap) {
                this.config.set('angularBootstrap', true);
            }
            if (this.angularMaterial) {
                this.config.set('angularMaterial', true);
            }


            done();
        }.bind(this));
    },

    askForPolicyBasedAuthModules: function() {
        var done = this.async();
        var prompts = [{
            type: 'checkbox',
            name: 'auth',
            message: 'Would you like to include Policy based Auth Modules in the project?',
            choices: [{
                value: 'policyBasedAuth',
                name: 'Yes',
                checked: true
            }, {
                value: 'noAuth',
                name: 'No',
                checked: false
            }]
        }];

        this.prompt(prompts, function(props) {
            this.policyBasedAuth = _.contains(props.auth, 'policyBasedAuth');
            this.noAuth = _.contains(props.auth, 'noAuth');

            if (this.policyBasedAuth) {
                this.config.set('policyBasedAuth', true);
            }
            if (this.noAuth) {
                this.config.set('policyBasedAuth', false);
            }

            done();
        }.bind(this));
    },

    createApplicationScaffold: function() {
        // Create public folders
        //mkdirp('app/modules/home');
        //mkdirp('app/modules/layouts');
        // Created by Yash
        mkdirp('app');
        mkdirp('app/modules/dashboard');
        mkdirp('app/modules/dashboard/header');
        mkdirp('app/modules/dashboard/sidenav');
        mkdirp('assets/images');
        mkdirp('assets/fonts');
        mkdirp('assets/fonts/materialicon');
        mkdirp('assets/fonts/roboto');
        mkdirp('assets/sass');
        mkdirp('src/bower_components');
        mkdirp('src/plugins');
        mkdirp('app/modules/shared');
        mkdirp('app/modules/shared/services');
        mkdirp('app/modules/shared/constants');
        mkdirp('app/modules/shared/directives');
        mkdirp('app/modules/shared/directives/focusMe');
        mkdirp('app/modules/shared/directives/inputLimit');
        mkdirp('app/modules/shared/directives/loadingSpinner');
        if (this.policyBasedAuth == true) {
            mkdirp('app/modules/shared/directives/policy');
        }
        mkdirp('app/modules/vendor');
        mkdirp('app/modules/layouts');
        mkdirp('app/modules/forgotPassword');
        mkdirp('app/modules/login');
        mkdirp('app/modules/notification');
        mkdirp('app/modules/otp');
        mkdirp('app/modules/registration');

        //Copy home folder content
        this.copy('app/app.js');
        if (this.angularMaterial == true) {
            //this.template('app/modules/home/home-material.html', 'app/modules/home/home.html');
            //this.template('app/modules/home/dashboard.html', 'app/modules/home/dashboard.html');
            //created by yash
            this.template('app/modules/dashboard/dashboard.html', 'app/modules/dashboard/dashboard.html');
            this.template('app/modules/dashboard/home.html', 'app/modules/dashboard/home.html');
            this.template('app/modules/dashboard/header/header.html', 'app/modules/dashboard/header/header.html');
            this.template('app/modules/dashboard/sidenav/sidenav.html', 'app/modules/dashboard/sidenav/sidenav.html');
        } else {
            //this.copy('app/modules/home/home.html');
        }
        //this.copy('app/modules/home/homeCtrl.js');
        //this.copy('app/modules/home/homeRoute.js');
        //this.copy('app/modules/home/homeService.js');
        //this.copy('app/modules/home/homeModule.js');
        // created by yash
        this.copy('app/modules/dashboard/dashboardCtrl.js');
        this.copy('app/modules/dashboard/dashboardRoute.js');
        this.copy('app/modules/dashboard/dashboardService.js');
        this.copy('app/modules/dashboard/dashboard.module.js');
        this.copy('app/modules/dashboard/dashboard.spec.js');

        //Copy layouts folder content
        if (this.angularMaterial == true) {
            //this.copy('app/modules/layouts/main-page/main-page.html');
            //this.copy('app/modules/layouts/main-page/mainPageCtrl.js');
            //this.copy('app/modules/layouts/side-nav/sidenav.html');
            //this.copy('app/modules/layouts/side-nav/sidenavCtrl.js');
            //this.copy('app/modules/layouts/side-nav/sidenavService.js');
            // created by yash
            this.copy('app/modules/dashboard/sidenav/sidenav.html');
            this.copy('app/modules/dashboard/sidenav/sidenavCtrl.js');
            this.copy('app/modules/dashboard/sidenav/sidenavService.js');
        } else {
            this.copy('app/modules/layouts/nav-bar/navbar.html');
            this.copy('app/modules/layouts/nav-bar/navbar-tpl.html');
            this.copy('app/modules/layouts/nav-bar/navBarCtrl.js');
            this.copy('app/modules/layouts/nav-bar/navbarDirective.js');
            this.copy('app/modules/layouts/nav-bar/navbarService.js');
        }

        //forgotPassword

        this.copy('app/modules/forgotPassword/forgotPassword.html');
        this.copy('app/modules/forgotPassword/forgotPasswordCtrl.js');
        this.copy('app/modules/forgotPassword/forgotPasswordRoute.js');
        this.copy('app/modules/forgotPassword/forgotPasswordService.js');
        this.copy('app/modules/forgotPassword/forgotPassword.module.js');

         //login

        this.copy('app/modules/login/login.html');
        this.copy('app/modules/login/loginCtrl.js');
        this.copy('app/modules/login/loginRoute.js');
        this.copy('app/modules/login/loginService.js');
        this.copy('app/modules/login/login.module.js');

         //notification

        this.copy('app/modules/notification/notification.html');
        this.copy('app/modules/notification/notificationCtrl.js');
        this.copy('app/modules/notification/notificationRoute.js');
        this.copy('app/modules/notification/notificationService.js');
        this.copy('app/modules/notification/notification.module.js');

        //otp

        this.copy('app/modules/otp/otp.html');
        this.copy('app/modules/otp/otpForm.html');
        this.copy('app/modules/otp/otpCtrl.js');
        this.copy('app/modules/otp/otpRoute.js');
        this.copy('app/modules/otp/otpService.js');
        this.copy('app/modules/otp/otp.module.js');

        //registration

        this.copy('app/modules/registration/registration.html');
        this.copy('app/modules/registration/registrationCtrl.js');
        this.copy('app/modules/registration/registrationRoute.js');
        this.copy('app/modules/registration/registrationService.js');
        this.copy('app/modules/registration/registration.module.js');

        // Copy shared modules file

        // services
        this.copy('app/modules/shared/shared.module.js');
        this.copy('app/modules/shared/services/arrayService.js');
        this.copy('app/modules/shared/services/authService.js');
        this.copy('app/modules/shared/services/baseDataService.js');
        this.copy('app/modules/shared/services/dialogService.js');
        this.copy('app/modules/shared/services/errorService.js');
        this.copy('app/modules/shared/services/exceptionHandlerService.js');
        this.copy('app/modules/shared/services/fileReaderService.js');
        this.copy('app/modules/shared/services/modelTransformerService.js');
        this.copy('app/modules/shared/services/pubSubService.js');
        this.copy('app/modules/shared/services/toastService.js');
        this.copy('app/modules/shared/services/dateConvertService.js');
        this.copy('app/modules/shared/services/restangularConfigService.js');
        this.copy('app/modules/shared/services/schemaValidateService.js');
        if (this.policyBasedAuth == true) {
            this.copy('app/modules/shared/services/authService.js');
        }

        //tests
        this.copy('app/modules/shared/services/tests/restangularConfigService.spec.js');
        this.copy('app/modules/shared/services/tests/validationRule.spec.js');

        // constants
        this.copy('app/modules/shared/constants/eventsConstantService.js');
        this.copy('app/modules/shared/constants/stateConstantService.js');
        // directives
        this.copy('app/modules/shared/directives/focusMe/focusMeDirective.js');
        this.copy('app/modules/shared/directives/inputLimit/inputLimitDirective.js');
        this.copy('app/modules/shared/directives/loadingSpinner/loadingSpinnerDirective.js');
        this.copy('app/modules/shared/directives/loadingSpinner/loadingSpinnerDialogDirective.js');
        this.copy('app/modules/shared/directives/loadingSpinner/loadingSpinner.html');
        if (this.policyBasedAuth == true) {
            this.copy('app/modules/shared/directives/policy/authPolicyDirective.js');
        }

        //copy vendor module files
        this.copy('app/modules/vendor/vendor.module.js');
        this.copy('app/modules/vendor/lib/validationRule/validationRule.module.js');

        //copy layout module files
        this.copy('app/modules/layouts/layouts.module.js');
        this.copy('app/modules/layouts/layoutsRoute.js');
        this.copy('app/modules/layouts/2columnInvite.html');
        this.copy('app/modules/layouts/2columnInviteCtrl.js');
        this.copy('app/modules/layouts/dialog.html');
        this.copy('app/modules/layouts/dialogCtrl.js');
        this.copy('app/modules/layouts/dialogForm.html');
        this.copy('app/modules/layouts/dialogFormCtrl.js');
        this.copy('app/modules/layouts/form.html');
        this.copy('app/modules/layouts/formCtrl.js');
        this.copy('app/modules/layouts/grid.html');
        this.copy('app/modules/layouts/gridCtrl.js');
        this.copy('app/modules/layouts/reportTable.html');
        this.copy('app/modules/layouts/reportTableCtrl.js');
        this.copy('app/modules/layouts/underconstruction.html');

        //copy gitignore files
        this.copy('.gitignore');
        //Copy fonts file
        this.copy('styles/fonts/materialicon/MaterialIcons-Regular.eot', 'assets/fonts/materialicon/MaterialIcons-Regular.eot');
        this.copy('styles/fonts/materialicon/MaterialIcons-Regular.ttf', 'assets/fonts/materialicon/MaterialIcons-Regular.ttf');
        this.copy('styles/fonts/materialicon/MaterialIcons-Regular.woff', 'assets/fonts/materialicon/MaterialIcons-Regular.woff');
        this.copy('styles/fonts/materialicon/MaterialIcons-Regular.woff2', 'assets/fonts/materialicon/MaterialIcons-Regular.woff2');
        this.copy('styles/fonts/roboto/Roboto-Bold.woff', 'assets/fonts/roboto/Roboto-Bold.woff');
        this.copy('styles/fonts/roboto/Roboto-Bold.woff2', 'assets/fonts/roboto/Roboto-Bold.woff2');
        this.copy('styles/fonts/roboto/Roboto-Light.woff', 'assets/fonts/roboto/Roboto-Light.woff');
        this.copy('styles/fonts/roboto/Roboto-Light.woff2', 'assets/fonts/roboto/Roboto-Light.woff2');
        this.copy('styles/fonts/roboto/Roboto-Medium.woff', 'assets/fonts/roboto/Roboto-Medium.woff');
        this.copy('styles/fonts/roboto/Roboto-Medium.woff2', 'assets/fonts/roboto/Roboto-Medium.woff2');
        this.copy('styles/fonts/roboto/Roboto-Regular.woff', 'assets/fonts/roboto/Roboto-Regular.woff');
        this.copy('styles/fonts/roboto/Roboto-Regular.woff2', 'assets/fonts/roboto/Roboto-Regular.woff2');
        this.copy('styles/fonts/roboto/roboto-italic.woff', 'assets/fonts/roboto/roboto-italic.woff');
        this.copy('styles/fonts/roboto/roboto-italic.woff2', 'assets/fonts/roboto/roboto-italic.woff2');

        // Copy Sass files
        this.copy('styles/sass/accordian.scss', 'assets/sass/accordian.scss');
        this.copy('styles/sass/application.scss', 'assets/sass/application.scss');
        this.copy('styles/sass/container.scss', 'assets/sass/container.scss');
        this.copy('styles/sass/font-icon.scss', 'assets/sass/font-icon.scss');
        this.copy('styles/sass/grid-form.scss', 'assets/sass/grid-form.scss');
        this.copy('styles/sass/helper.scss', 'assets/sass/helper.scss');
        this.copy('styles/sass/instruction.scss', 'assets/sass/instruction.scss');
        this.copy('styles/sass/loading-spinner.scss', 'assets/sass/loading-spinner.scss');
        this.copy('styles/sass/login.scss', 'assets/sass/login.scss');
        this.copy('styles/sass/notification.scss', 'assets/sass/notification.scss');
        this.copy('styles/sass/overwrite.scss', 'assets/sass/overwrite.scss');
        this.copy('styles/sass/report-table.scss', 'assets/sass/report-table.scss');
        this.copy('styles/sass/sidebar.scss', 'assets/sass/sidebar.scss');
        this.copy('styles/sass/toast.scss', 'assets/sass/toast.scss');
        this.copy('styles/sass/typography.scss', 'assets/sass/typography.scss');
        this.copy('styles/sass/variable.scss', 'assets/sass/variable.scss');

        // Copy project files
        //this.copy('Gruntfile.js');
        this.copy('README.md');
        this.copy('LICENSE.md');
        this.copy('karma.conf.js');

        // Copy project hidden files
        this.copy('bowerrc', '.bowerrc');
        this.copy('editorconfig', '.editorconfig');
        this.copy('eslintrc', '.eslintrc');
        this.copy('tern-project', '.tern-project');
    },

    createApplicationTemplateFiles: function() {
        this.template('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
        if (this.angularMaterial == true && this.policyBasedAuth == true) {
            this.template('_index-material-auth.html', 'index.html');
        } else if (this.angularMaterial == true && this.policyBasedAuth == false) {
            this.template('_index-material.html', 'index.html');
        } else {
            this.template('_index.html', 'index.html');
        }

        this.template('app/_app.config.js', 'app/app.config.js');
        // commented by yash
        //this.template('app/modules/home/_home-test.js', 'app/modules/home/home-test.js');


        this.fs.copy(
            this.templatePath('_Gruntfile.js'),
            this.destinationPath('Gruntfile.js')
        );

    },

    install: function() {

        this.installDependencies({
            skipInstall: this.options['skip-install'],
            bower: true
        });
    }

});

module.exports = AngmGenerator;
