import gulp from 'gulp'
import livereload from 'gulp-livereload'

// 监听文件变化实现浏览器刷新
gulp.task('watch', () => {
    livereload.listen()
    gulp.watch('app/js/index.js', ['scripts'])
    gulp.watch('app/**/*.ejs', ['pages'])
    gulp.watch('app/**/*.css', ['css'])
})