import gulp from 'gulp'
import gulpif from 'gulp-if'
import concat from 'gulp-concat'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import named from 'vinyl-named'
import livereload from 'gulp-livereload'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import args from './util/args'

// js 任务
gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
    .pipe(plumber({ // 防止编译出错退出程序
        errorHandle: function () {

        }
    }))
    .pipe(named()) // 保存文件名，不然webpack生成hash值
    .pipe(gulpWebpack({
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel-loader'
            }]
        }
    }), null, (err, stats) => {
        log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
            thunks: false
        }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
        basename: 'cp',
        extname: '.min.js'
    }))
    .pipe(uglify({
        compress: {properties: false},
        output: {'quote_keys': true}
    }))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch, livereload()))
})