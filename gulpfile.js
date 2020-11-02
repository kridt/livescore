var gulp = require("gulp");
var sass = require("gulp-sass");
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var sourceMap = require('gulp-sourcemaps');
var cleanCSS = require("gulp-clean-css");
var connect = require("gulp-connect");
var imagemin = require("gulp-imagemin");
var imageResize = require("gulp-image-resize");

function processHTML() {
	return gulp.src("src/html/**/*.html")
		.pipe(gulp.dest("dist/"))
		.pipe(connect.reload());
}
 
function processSass() {
	return gulp.src("src/sass/**/*.scss")
	.pipe(sourceMap.init())
		.pipe(sass())
		.pipe(cleanCSS({ compatibility: "ie9" }))
		.pipe(sourceMap.write("."))
		.pipe(gulp.dest("dist/assets/css"))
		.pipe(connect.reload());
}

function processImage(){
	return gulp.src(["src/images/**/*", "!src/images/**/thumb.db"])
	.pipe(imagemin([
		imagemin.mozjpeg({ quality: 25}),
		imagemin.optipng({optimizationLevel: 1})
	]))
	.pipe(imageResize({
		width: 500,
		crop: false,
		upscale: false,
	}))

	.pipe(gulp.dest("dist/assets/images"))
	.pipe(connect.reload())
}

function processJS() {
	return gulp.src("src/js/**/*.js")
	.pipe(sourceMap.init())
	.pipe(babel({
		presets: ["@babel/env"]
	}))
	.pipe(concat("script.js"))
	.pipe(sourceMap.write("."))
	.pipe(gulp.dest("dist/assets/js"))
	.pipe(connect.reload());
};

function watch() {
	gulp.watch("src/sass/**/*.scss",
	{ ignoreInitial: false },
	processSass);
	gulp.watch("src/html/**/*.html",
	{ ignoreInitial: false },
	processHTML);
	gulp.watch("src/js/**/*.js",
	{ ignoreInitial: false },
	processJS);
	gulp.watch("src/images/**/*",
	{ ignoreInitial: false},
	processImage);
	
}

	function server() {
  return connect.server({
    root: 'dist',
    livereload: false
  });
} 

gulp.task("default", gulp.parallel(server, watch));
