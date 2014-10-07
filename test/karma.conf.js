module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath    : '',

        // frameworks to use
        frameworks  : [ 'mocha', 'sinon', 'chai-jquery', 'jquery-2.1.0', 'chai' ],

        // list of files / patterns to load in the browser
        files: [
            {
                pattern : 'bower_components/underscore/underscore.js',
                included: true,
                served: true
            },
            {
                pattern : 'bower_components/backbone/backbone.js',
                included: true,
                served: true
            },
            {
                pattern : '../src/**/*.js',
                included: true,
                served: true
            },
            {
                pattern : 'specs/**/*.js',
                included: true,
                served: true
            },
            {
                pattern : 'specs/fixtures/*.html',
                included: true,
                served: true
            },
            {
                pattern : 'specRunner.js',
                included: true,
                served: true
            }
        ],

        // list of files to exclude
        exclude     : [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters   : [ 'dots', 'coverage' ] ,

        preprocessors   : {
            '../src/**/*.js'            : [ 'coverage' ],
            'specs/fixtures/*.html'     : [ 'html2js' ]
        },

        coverageReporter    : {
            type    : 'html',
            dir     : '../coverage/browser/'
        },

        // web server port
        port        : 9876,

        // enable / disable colors in the output (reporters and logs)
        colors      : true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel    : config.LOG_WARN,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch   : false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers    : [ 'Chrome' , 'ChromeCanary', 'Firefox', 'Opera', 'Safari' ],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun   : true
    });
};
