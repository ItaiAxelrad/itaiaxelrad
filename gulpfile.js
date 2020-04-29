// directories
const src = 'src';
const dist = 'dist';
// Plugins
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Log Message
gulp.task('message', async () => {
  return console.log('Gulp is running...');
});

// HTML: copy and minify all HTML files
gulp.task('htmlMin', async () => {
  return gulp
    .src(`${src}/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(dist));
});

// Images: copy and minify all images (no SVG)
gulp.task('imageMin', async () => {
  gulp
    .src([`${src}/images/*.jpg`,`${src}/images/*.jpeg`, `${src}/images/*.png`])
    .pipe(imagemin())
    .pipe(gulp.dest(`${dist}/images`));
});

// SVG: copy all files
gulp.task('copySVG', async () => {
  gulp.src(`${src}/images/*.svg`).pipe(gulp.dest(`${dist}/images`));
});

// icons: copy over PWA icons to new folder
gulp.task('copyIcons', async () => {
  gulp
    .src(`${src}/images/icons/*.png`)
    .pipe(gulp.dest(`${dist}/images/icons/`));
});

// CSS: concat, autoprefix and nano
gulp.task('cssMin', async () => {
  var plugins = [autoprefixer(), cssnano()];
  return gulp
    .src([`${src}/styles/normalize.css`, `${src}/styles/*.css`])
    .pipe(concat('main.css'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest(`${dist}/styles`));
});

// Scripts: copy over to new folder
gulp.task('copyJS', async () => {
  gulp.src(`${src}/scripts/*.js`).pipe(gulp.dest(`${dist}/scripts`));
});

// modules: copy over JS modules folder to dist
gulp.task('copyMods', async () => {
  gulp
    .src(`${src}/scripts/modules/*.js`)
    .pipe(gulp.dest(`${dist}/scripts/modules/`));
});

// JSON: copy over to new folder
gulp.task('copyJSON', async () => {
  gulp.src(`${src}/scripts/*.json`).pipe(gulp.dest(`${dist}/scripts`));
});

// Copy src manifest over to new folder
gulp.task('copyMani', async () => {
  gulp.src(`${src}/*.json`).pipe(gulp.dest(dist));
});
// Copy src service worker over to new folder
gulp.task('copySW', async () => {
  gulp.src(`${src}/*.js`).pipe(gulp.dest(dist));
});

// Copy README over to new folder
gulp.task('copyMd', async () => {
  gulp.src(`${src}/*.md`).pipe(gulp.dest(dist));
});

// Copy Docs over to new folder
gulp.task('copyDocs', async () => {
  gulp.src(`${src}/docs/*`).pipe(gulp.dest(`${dist}/docs`));
});

// Gulp build task array
gulp.task(
  'build',
  gulp.series([
    'message',
    'htmlMin',
    'copySVG',
    'copyJS',
    'copyMods',
    'copyJSON',
    'copyMani',
    'copySW',
    'copyIcons',
    'copyMd',
    'copyDocs',
    'imageMin',
    'cssMin',
  ])
);