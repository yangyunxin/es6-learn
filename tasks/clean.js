import gulp from 'gulp'
import del from 'del'
import args from './util/args.js'

// 清除数据目录
gulp.task('clean', () => {
    return del(['server/public', 'server/views'])
})