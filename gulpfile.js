const gulp = require('gulp');
const sass = require('gulp-sass');
 



gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  //PIPE taking the returned from the function and passing the files into the pipe
    .pipe(sass().on('error', sass.logError))
    //tells pipe where to put it ina directory called css
    .pipe(gulp.dest('./css'));
});
 


//watches for any changes that were made in the file
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// gulp.task('first-task', function(){
// console.log('HEllo world');
// })


// gulp.task('second-task', function(){
//   console.log('this is my second task');
// })


//to have multiple tasks run then put the tasks in the arr
// gulp.task('default', ['first-task', 'second-task'])

gulp.task('default', ['sass'])