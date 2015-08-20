import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import errorHandler from '../errorHandler';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import gulpif from 'gulp-if';

gulp.task('styles', () => {

	return gulp
		.src('app/styles/default.sass')
		.pipe(plumber({errorHandler}))
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
      cascade: false
		}))
		.pipe(gulpif('production' === process.env.NODE_ENV, csso()))
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());

});
