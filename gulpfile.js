var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var karma = require('gulp-karma');
var browserify = require('gulp-browserify');

var testFiles = [
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'build/js/app.js',
    'test/**/*.js'
];

gulp.task('appscripts', function() {
    // Single entry point to browserify
    gulp.src('./lib/app.js')
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('test', ['appscripts'], function(){
    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'test/karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err){
            throw err;
        });
});

gulp.task('lint', function(){
    gulp.src(['test/**/*.js', 'lib/**/.*js', '*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['test', 'lint']);
