var gulp     = require("gulp");
var gulputil = require("gulp-util");
var concat   = require("gulp-concat");
var uglify   = require("gulp-uglify");

gulp.task("scripts", function() {

	gulp.src("js/**/*.js")
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist"));

});

gulp.task("styles", function() {

});

gulp.task("default", ["scripts", "styles"]);