import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';
import imagemin from 'gulp-imagemin';

gulp.task('spritesmith', (cb) => {
	let spriteData = gulp.src('./app/images/sprite/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.sass',
		imgPath: '/images/sprite.png'
	}));

	let imgStream = spriteData.img
		.pipe(imagemin({
			optimizationLevel: 2
		}))
		.pipe(gulp.dest('./dist/images'));

	let cssStream = spriteData.css
		.pipe(gulp.dest('./app/styles/helpers'));

	cb();
});
