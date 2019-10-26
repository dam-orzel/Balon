var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("serve", ["sass"], function() {
  browserSync({
    server: config.src
  });
  gulp.watch(config.scssin, ["sass"]);
});

gulp.task("sass", function() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"));
});
