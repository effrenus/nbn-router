import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import errorHandler from '../errorHandler';
import browserSync from 'browser-sync';

gulp.task('styles', () => {

	return gulp
		.src('app/styles/default.sass')
		.pipe(plumber({errorHandler}))
		.pipe(sass())
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());

});
