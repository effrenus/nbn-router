import gulp from 'gulp';

gulp.task('copy:fonts', () => {
	return gulp
		.src('app/fonts/*')
		.pipe(gulp.dest('dist/fonts'));
})

gulp.task('copy:js', () => {
	return gulp
		.src('app/scripts/libs/*')
		.pipe(gulp.dest('dist/scripts/libs'));
});

gulp.task('copy:images', () => {
	return gulp
		.src(['**/*.{png,jpg,gif}', '!sprite/**/*'], {cwd: 'app/images'})
		.pipe(gulp.dest('dist/images'));
});

gulp.task('copy', ['copy:images']);
