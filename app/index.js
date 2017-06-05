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
        mkdirp('app/modules/vendor');
        mkdirp('app/modules/layouts');

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
        this.copy('app/modules/dashboard/dashboardModule.js');

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

        // Copy shared modules file
        // services
        this.copy('app/modules/shared/sharedModule.js');
        this.copy('app/modules/shared/services/baseDataService.js');
        this.copy('app/modules/shared/services/dialogService.js');
        this.copy('app/modules/shared/services/errorService.js');
        this.copy('app/modules/shared/services/exceptionHandlerService.js');
        this.copy('app/modules/shared/services/fileReaderService.js');
        this.copy('app/modules/shared/services/modelTransformerService.js');
        this.copy('app/modules/shared/services/pubSubService.js');
        this.copy('app/modules/shared/services/toastService.js');
        this.copy('app/modules/shared/services/dateConvertService.js');
        // constants
        this.copy('app/modules/shared/constants/eventsConstantService.js');
        // directives
        this.copy('app/modules/shared/directives/focusMe/focusMeDirective.js');
        this.copy('app/modules/shared/directives/inputLimit/inputLimitDirective.js');
        this.copy('app/modules/shared/directives/loadingSpinner/loadingSpinnerDirective.js');
        this.copy('app/modules/shared/directives/loadingSpinner/loadingSpinnerDialogDirective.js');
        this.copy('app/modules/shared/directives/loadingSpinner/loadingSpinner.html');

        //copy vendor module files
        this.copy('app/modules/vendor/vendorModule.js');
        this.copy('app/modules/vendor/vendor-test.js');

        //copy layout module files
        this.copy('app/modules/layouts/layoutsModule.js');
        this.copy('app/modules/layouts/layoutsCtrl.js');
        this.copy('app/modules/layouts/layoutsRoute.js');
        this.copy('app/modules/layouts/layoutsService.js');
        this.copy('app/modules/layouts/layouts.html');
        this.copy('app/modules/layouts/html/1Column.html');

        //copy gitignore files
        this.copy('.gitignore');
        //Copy fonts file
        this.copy('styles/fonts/materialicon/MaterialIcons-Regular.eot', 'assets/fonts/materialicon/MaterialIcons-Regular.eot');
        this.copy('styles/fonts/materialicon/MaterialIcons-Regular.ttf', 'assets/fonts/materialicon/MaterialIcons-Regular.ttf');
        this.copy('styles/fonts/materialicon/MaterialIcons-Regular.woff', 'assets/fonts/materialicon/MaterialIcons-Regular.woff');
        this.copy('styles/fonts/materialicon/MaterialIcons-Regular.woff2', 'assets/fonts/materialicon/MaterialIcons-Regular.woff2');
        this.copy('styles/fonts/roboto/Roboto-Bold.eot', 'assets/fonts/roboto/Roboto-Bold.eot');
        this.copy('styles/fonts/roboto/Roboto-Bold.ttf', 'assets/fonts/roboto/Roboto-Bold.ttf');
        this.copy('styles/fonts/roboto/Roboto-Bold.woff', 'assets/fonts/roboto/Roboto-Bold.woff');
        this.copy('styles/fonts/roboto/Roboto-Bold.woff2', 'assets/fonts/roboto/Roboto-Bold.woff2');
        this.copy('styles/fonts/roboto/Roboto-Light.eot', 'assets/fonts/roboto/Roboto-Light.eot');
        this.copy('styles/fonts/roboto/Roboto-Light.ttf', 'assets/fonts/roboto/Roboto-Light.ttf');
        this.copy('styles/fonts/roboto/Roboto-Light.woff', 'assets/fonts/roboto/Roboto-Light.woff');
        this.copy('styles/fonts/roboto/Roboto-Light.woff2', 'assets/fonts/roboto/Roboto-Light.woff2');
        this.copy('styles/fonts/roboto/Roboto-LightItalic.eot', 'assets/fonts/roboto/Roboto-LightItalic.eot');
        this.copy('styles/fonts/roboto/Roboto-LightItalic.ttf', 'assets/fonts/roboto/Roboto-LightItalic.ttf');
        this.copy('styles/fonts/roboto/Roboto-LightItalic.woff', 'assets/fonts/roboto/Roboto-LightItalic.woff');
        this.copy('styles/fonts/roboto/Roboto-Medium.eot', 'assets/fonts/roboto/Roboto-Medium.eot');
        this.copy('styles/fonts/roboto/Roboto-Medium.ttf', 'assets/fonts/roboto/Roboto-Medium.ttf');
        this.copy('styles/fonts/roboto/Roboto-Medium.woff', 'assets/fonts/roboto/Roboto-Medium.woff');
        this.copy('styles/fonts/roboto/Roboto-Medium.woff2', 'assets/fonts/roboto/Roboto-Medium.woff2');
        this.copy('styles/fonts/roboto/Roboto-Regular.eot', 'assets/fonts/roboto/Roboto-Regular.eot');
        this.copy('styles/fonts/roboto/Roboto-Regular.ttf', 'assets/fonts/roboto/Roboto-Regular.ttf');
        this.copy('styles/fonts/roboto/Roboto-Regular.woff', 'assets/fonts/roboto/Roboto-Regular.woff');
        this.copy('styles/fonts/roboto/Roboto-Regular.woff2', 'assets/fonts/roboto/Roboto-Regular.woff2');

        // Copy Sass files
        this.copy('styles/sass/accordian.scss', 'assets/sass/accordian.scss');
        this.copy('styles/sass/application.scss', 'assets/sass/application.scss');
        this.copy('styles/sass/container.scss', 'assets/sass/container.scss');
        this.copy('styles/sass/dataTable.scss', 'assets/sass/dataTable.scss');
        this.copy('styles/sass/font-icon.scss', 'assets/sass/font-icon.scss');
        this.copy('styles/sass/form.scss', 'assets/sass/form.scss');
        this.copy('styles/sass/grid.scss', 'assets/sass/grid.scss');
        this.copy('styles/sass/header.scss', 'assets/sass/header.scss');
        this.copy('styles/sass/helper.scss', 'assets/sass/helper.scss');
        this.copy('styles/sass/loadingSpinner.scss', 'assets/sass/loadingSpinner.scss');
        this.copy('styles/sass/login.scss', 'assets/sass/login.scss');
        this.copy('styles/sass/overwrite.scss', 'assets/sass/overwrite.scss');
        this.copy('styles/sass/sidebar.scss', 'assets/sass/sidebar.scss');
        this.copy('styles/sass/stepper.scss', 'assets/sass/stepper.scss');
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
        if (this.angularMaterial == true) {
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
