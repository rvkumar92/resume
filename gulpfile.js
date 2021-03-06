var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence');

gulp.task('build',function(){
    return browserify({
        entries: 'public/javascripts/src/app.js',
        extensions: ['.jsx'],
        debug: true
    })
        .transform(babelify,{presets:['es2015',"react"]})
        .bundle()
        .pipe(source('resume.js'))
        .pipe(gulp.dest('public/javascripts/dist/js'));
});

gulp.task('compress',function(){
   return gulp.src('public/javascripts/dist/js/resume.js')
       .pipe(uglify())
       .pipe(rename({suffix:'.min'}))
       .pipe(gulp.dest('public/javascripts/dist/js'));
});

gulp.task('default',function(cb){
    runSequence('build','compress',cb);
});