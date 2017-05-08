// Grunt tasks

module.exports = function(grunt) {
  "use strict";
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
      '* <%= pkg.name %> - v<%= pkg.version %> - MIT LICENSE <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
      '* @author <%= pkg.author %>\n' +
      '*/\n',

    clean: {
      dist: ['src']
    },
    //added by Yash
    eslint: {
      target: ['app/**/*.js']
    },

    exec: {
      bowerInstaller: 'bower-installer'
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/sass/',
          src: ['*.scss'],
          dest: '.tmp',
          ext: '.css'
        }]
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      base: {
        src: [
          // Angular Project Dependencies,
          'app/app.js',
          'app/app.config.js',
          'app/modules/**/*Module.js',
          'app/modules/**/*Route.js',
          'app/modules/**/*Ctrl.js',
          'app/modules/**/*Service.js',
          'app/modules/**/*Directive.js'
        ],
        dest: 'assets/js/<%= pkg.name %>-appbundle.js'
      },
      build: {
        src: [
          // Angular Project Dependencies,
          'assets/libs/angular/angular.js',
          'assets/libs/**/*.js'

        ],
        dest: 'assets/js/<%= pkg.name %>-angularbundle.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>',
        report: 'min'
      },
      base: {
        src: ['<%= concat.base.dest %>'],
        dest: 'assets/js/<%= pkg.name %>-angscript.min.js'
      },
      basePlugin: {
        src: ['src/plugins/**/*.js'],
        dest: 'assets/js/plugins/',
        expand: true,
        flatten: true,
        ext: '.min.js'
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          port: 4000,
          base: '.',
          hostname: 'localhost',
          debug: true,
          livereload: true,
          open: true
        }
      }
    },
    concurrent: {
      tasks: ['connect', 'watch'],
      options: {
        logConcurrentOutput: true
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      app: {
        files: '<%= eslint.target %>',
        tasks: ['eslint'],
        options: {
          livereload: true
        }
      },
      sass: {
        options: {
          livereload: true
        },
        files: ['assets/sass/*.scss'],
        tasks: ['sass']
      }
    },

    injector: {
      options: {
      	addRootSlash: false
      },
      dev: {
        files: {
          'index.html': [
            'bower.json',
            'app/app.js',
            'app/app.config.js',
            'app/**/*Module.js',
            'app/**/*Route.js',
            'app/**/*Ctrl.js',
            'app/**/*Service.js',
            'app/**/*Directive.js'
          ]
        }
      },
      production: {
        files: {
          'index.html': [
            'assets/css/**/*.css',
            'assets/js/*.js'
          ]

        }
      }
    },

    ngtemplates: {
      app: {
        src: 'app/modules/**/*.html',
        dest: 'assets/js/templates.js',
        options: {
          module: '<%= pkg.name %>',
          root: 'app/',
          standAlone: false
        }
      }
    }



  });

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Register grunt tasks
  grunt.registerTask("build", [
    "eslint",
    "exec",
    "concat",
    "ngtemplates",
    "injector:production",
    "concurrent",
    "clean"
  ]);

  grunt.registerTask("lint", ["eslint"]);

  // Development task(s).
  grunt.registerTask('dev', ['injector:dev', 'concurrent']);

};
