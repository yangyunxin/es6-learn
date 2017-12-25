import gulp from 'gulp'
// import livereload from 'gulp-livereload'
import args from './util/args.js'

// 监听文件变化实现浏览器刷新
gulp.task('watch', (cb) => {
    if (!args.watch) return cb()
    // livereload.listen()
    gulp.watch('app/**/*.js', ['scripts'])
    gulp.watch('app/**/*.ejs', ['pages'])
    gulp.watch('app/**/*.css', ['css'])
})