// Plugins
let gulp = require('gulp');
let imagemin = require('gulp-imagemin');
let concat = require('gulp-concat');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');

// name of distribution folder
// const d = new Date();
// const year = d.getFullYear();
// const month = d.getMonth() + 1;
// const day = d.getDate();
// const dist = `dist_${year}-${month}-${day}`;

const dist = "dist"

// Logs Message
gulp.task('message', async () => {
  return console.log('Gulp is running...');
});

// HTML: copy all files
gulp.task('copyHtml', async () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest(dist));
});

// Docs: copy all files
gulp.task('copyDocs', async () => {
  gulp.src('src/docs/*')
    .pipe(gulp.dest(`${dist}/docs`));
});

// Images: optimize
gulp.task('imageMin', async () => {
  gulp.src(['src/images/*.jpg', 'src/images/*.png'])
    .pipe(imagemin())
    .pipe(gulp.dest(`${dist}/images`));
});

// SVG: copy all files
gulp.task('copySVG', async () => {
  gulp.src('src/images/*.svg')
    .pipe(gulp.dest(`${dist}/images`));
});

// icons: copy over PWA icons to new folder
gulp.task('copyIcons', async () => {
  gulp.src('src/images/icons/*.png')
    .pipe(gulp.dest(`${dist}/images/icons/`));
});

// CSS: concat, autoprefix and nano
gulp.task('css', async () => {
  var plugins = [
    autoprefixer(),
    cssnano()
  ];
  return gulp.src(['src/styles/normalize.css', 'src/styles/*.css'])
    .pipe(concat('main.css'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest(`${dist}/styles`));
});

// Scripts: copy over to new folder
gulp.task('copyJS', async () => {
  gulp.src('src/scripts/*.js')
    .pipe(gulp.dest(`${dist}/scripts`));
});

// modules: copy over JS modules folder to dist
gulp.task('copyMods', async () => {
  gulp.src('src/scripts/modules/*.js')
    .pipe(gulp.dest(`${dist}/scripts/modules/`));
});

// JSON: copy over to new folder
gulp.task('copyJSON', async () => {
  gulp.src('src/scripts/*.json')
    .pipe(gulp.dest(`${dist}/scripts`));
});

// Copy src manifest over to new folder
gulp.task('copyMani', async () => {
  gulp.src('src/*.json')
    .pipe(gulp.dest(dist));
});
// Copy src service worker over to new folder
gulp.task('copySW', async () => {
  gulp.src('src/*.js')
    .pipe(gulp.dest(dist));
});

// Copy README over to new folder
gulp.task('copyMd', async () => {
  gulp.src('src/*.md')
    .pipe(gulp.dest(dist));
});
// Scripts: minify & concat
// gulp.task('scripts', async function(){
//   gulp.src('src/scripts/*.js')
//       .pipe(concat())
//       .pipe(uglify())
//       .pipe(gulp.dest('dist/scripts'));
// });

// Default gulp task array
gulp.task('build', gulp.series(['message', 'copyHtml', 'copyDocs', 'copySVG', 'copyJS', 'copyMods', 'copyJSON', 'copyMani', 'copySW', 'copyIcons', 'copyMd', 'imageMin', 'css']));

// Watch files for change
gulp.task('watch', async () => {
  gulp.watch('src/*.html', ['copyHtml']);
  gulp.watch('src/scripts/*.js', ['copyJS']);
  gulp.watch('src/scripts/*.json', ['copyJSON']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/PDFs/*.pdf', ['copyDocs']);
  gulp.watch('src/styles/*.css', ['css']);
});