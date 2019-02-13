const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence')
var sass=require('gulp-sass');

gulp.task('copy-html', function(){
    return gulp.src('./*.html')
               .pipe(gulp.dest('./dist'));
});
gulp.task('copy-js', function(){
    return gulp.src('./src/**/*.js')
                .pipe(gulp.dest('./dist'));
});
gulp.task('serve',['copy-html','copy-js'] ,function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }});
    gulp.watch('./*.html',['copy-html','copy-js']).on('change',browserSync.reload);
    });
gulp.task('sass', function () {
        return gulp.src('./src/scss/**/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./dist/css'));
      });
gulp.task('sass', function () {
        return gulp.src('./src/scss/**/*.scss')
          .pipe(sass.sync({outputStyle: 'expended'}).on('error', sass.logError))
          .pipe(gulp.dest('./css'));
       });