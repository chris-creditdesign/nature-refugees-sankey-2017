"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");
var betterRollup = require("gulp-better-rollup");
var babel = require("rollup-plugin-babel");
var nodeResolve = require("rollup-plugin-node-resolve");
var browserSync = require("browser-sync").create();
var gulprun = require("run-sequence");
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task("concat:build", function () {
	return gulp.src([	
						'./assets/concat/polopoly-header.html',
						'./assets/concat/style-link.txt',
						'./assets/widget.html',
						'./assets/concat/script-link.txt',
						'./assets/concat/polopoly-footer.html'
						])
		.pipe(concat("index.html"))
		.pipe(gulp.dest("./build/"));
});

gulp.task("concat:dist", function () {
	return gulp.src([	
						'./assets/concat/style-open.txt',
						'./dist/css/index.css',
						'./assets/concat/style-close.txt',
						'./assets/widget.html',
						'./assets/concat/script-open.txt',
						'./dist/js/main.js',
						'./assets/concat/script-close.txt',
						])
		.pipe(concat("index.html"))
		.pipe(gulp.dest("./dist/"));
});

gulp.task("sass:build", function () {
	return gulp.src("./assets/sass/*.scss")
		.pipe(sass({outputStyle: 'expanded'}).on("error", sass.logError))
		.pipe(postcss([ autoprefixer({ browsers: ['> 1%'] }) ]))
		.pipe(gulp.dest("./build/css/"));
});

gulp.task("sass:dist", function () {
	return gulp.src("./assets/sass/*.scss")
		.pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
		.pipe(postcss([ autoprefixer({ browsers: ['> 1%'] }) ]))
		.pipe(gulp.dest("./dist/css/"));
});

gulp.task("jshint", function () {
	return gulp.src(["./assets/js/*.js","./assets/js/*/*.js"])
		.pipe(jshint(".jshintrc"))
		.pipe(jshint.reporter(stylish));
});

gulp.task("rollup:build", function () {
	gulp.src("./assets/js/main.js")
		.pipe(betterRollup({plugins: [babel({ presets: ["es2015-rollup"]}), nodeResolve({ jsnext: true, main: true })]}, "iife"))
		.pipe(gulp.dest("./build/js/"));
});

gulp.task("uglify", function (cb) {
	pump([
		gulp.src("./build/js/main.js"),
		uglify(),
		gulp.dest("./dist/js/")

	], cb
	);
});

gulp.task("serve", (callback) => browserSync.init({server: { baseDir: "./build/" }, open: false}));
gulp.task("refresh", () => browserSync.reload());

gulp.task("watch", () => gulp.watch([
			"./assets/widget.html",
			"./assets/js/*.js",
			"./assets/js/*/*.js",
			"./assets/js/*/*/*.js",
			"./assets/sass/*.scss"], 
		() => gulprun(["jshint", "rollup:build", "sass:build", "concat:build"])
	)
);

gulp.task("dist", function () {
	gulprun("jshint", "rollup:build", "uglify", "sass:dist", "concat:dist");
});

gulp.task("default", ["rollup:build", "concat:build", "serve", "watch",]);
