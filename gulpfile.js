import gulp from 'gulp';
import concat from 'gulp-concat';

gulp.task('default', function () {
    return gulp.src('src/files/*.js')  // Select all JavaScript files in src/files/
        .pipe(concat('all.js'))        // Concatenate them into a single file named all.js
        .pipe(gulp.dest('dest/files')); // Save the result in dest/files/
});
