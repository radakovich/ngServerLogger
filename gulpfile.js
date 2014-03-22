var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var karma = require('gulp-karma');

var testFiles = [
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'lib/**/*.js',
    'test/**/*.js'
];

gulp.task('test', function(){
    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'test/karma.config.js',
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
