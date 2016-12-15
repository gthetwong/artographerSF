var gulp = require('gulp');
var runSeq = require('run-sequence');


var destDir = 'build/public';

var destPaths = {
	styles: destDir + '/css',
	scripts: destDir + '/js'
};

gulp.task('clean', function(){
	var del = require('del');
	return del(destDir);
});

gulp.task('styles', function(){
	var postcss = require('gulp-postcss');
	var cssnext = require('postcss-cssnext');
	var cssmixins = require('postcss-mixins');
	var cssimport = require('postcss-import');
	var cssreporter = require('postcss-reporter');
	var processors = [cssimport(), cssmixins, cssnext(), cssreporter()];
	return gulp.src('public/css/app.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest(destPaths.styles));
});

gulp.task('bundle', function(cb){
	var Builder = require('systemjs-builder');
	var builder = new Builder('./public/js/', 'config.js');
	builder.reset();
	builder.buildStatic('index.js', destPaths.scripts + '/index.js', {sourceMaps: 'inline', runtime:false})
	.then(function(){
		console.log('Build Complete');
		cb(null);
	})
	.catch(function(err){
		console.log(err);
		cb(err);
	});
});

gulp.task('server', function(){
	return gulp.src('app.js')
		.pipe(gulp.dest('build/'));
});

gulp.task('build', function(cb){
	runSeq('clean', 'styles', 'bundle', 'server', cb);
});

// gulp.task('watch', function(){
	// gulp.watch([srcPaths.html, 'templates/*.pug'], ['html']);
// 	gulp.watch(srcPaths.styles, ['styles']);
// 	gulp.watch(srcPaths.scripts, ['scripts']);
// });

gulp.task('serve', ['build'], function(){
	var gls = require('gulp-live-server');
	var server = gls.new('app.js');
	server.start();
});

gulp.task('default', ['serve'], function(){});
