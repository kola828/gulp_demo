var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync'),
  clean = require('gulp-clean'),
  minifycss = require('gulp-minify-css'),
  runSequence = require('run-sequence'),
  stylus = require('gulp-stylus'),
  watch = require('gulp-watch'),
  babel = require("gulp-babel"),
  es2015 = require("babel-preset-es2015"),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat')

//编译html文件，将html文件拷贝到www文件夹在下。
gulp.task('html', function(){
  gulp.src(['./src/view/**/*.html'])
    .pipe(gulp.dest('./www/'));
});


//编译样式文件，使用gulp-sylus 将并添加多浏览器样式自动补全
gulp.task('stylus', function() {
  gulp.src(['./src/public/css/**/*.styl'])
    .pipe(stylus())
    .pipe(autoprefixer({browsers: ['> 1%', 'IE 8'], cascade: false }))
    .pipe(minifycss())
    .pipe(gulp.dest('./www/public/css'));
});

//编译js文件，使用jshint检查javascript的语法，将js文件拷贝到www文件夹在下。
gulp.task('js', function(){
  gulp.src('./src/public/js/**/*.js')
	.pipe(jshint())
    .pipe(gulp.dest('./www/public/js'));
});

//编译libs
gulp.task('libs', function(){
  gulp.src('./src/public/libs/**')
    .pipe(gulp.dest('./www/public/libs'));
});

//复制图片到指定目录
gulp.task('images', function(){
  gulp.src('./src/public/images/**/*.*')
    .pipe(gulp.dest('./www/public/images'));
});

//创建服务器
gulp.task('server', function(){
  browserSync({
    port: 8080,
    open: true,
    server: {
      baseDir: "./www"
    },
    host: "localhost"
  });
});

//合并文件
gulp.task('buildjs', function() {
  gulp.src([
    './src/public/js/component.js',
  ])
      .pipe(concat("build.js"))
      .pipe(gulp.dest("./www/public/js"));
});

//设置看守，并在文件发生更改后执行任务
gulp.task('watch', function(){
  watch('./src/view/*.html', function(){
    gulp.start('html');
  });
  watch('./src/public/css/**/*.styl', function(){
    gulp.start('stylus');
  });
  watch('./src/public/js/**/*.js', function(){
    gulp.start('js');
  });

  watch('./src/public/images/**/*.{png,gif,jpg,svg}', function(){
    gulp.start('images');
  });
});

//清理dist中文件
gulp.task('clean', function() {
  return gulp.src(['./www/**/*'], {read: false})
    .pipe(clean());
});

// 预设任务
gulp.task('default',runSequence('html','stylus', 'js', 'libs', 'images', 'watch', 'server','buildjs'));