## 搭建es6开发环境

### 命令行参数设置
- 命令行参数使用[yargs](https://github.com/yargs/yargs)库，用法如下：
比如gulp命令，你想使用生产环境，在命令行输入`gulp --production`，在yargs.js文件中定义option，例如
````
const args = yargs

    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })
    .argv
````
在gulpfile.babel.js中就可以使用args.production获取命令行参数

### 配置js模块开发环境
- 用webpack对js文件进去es6编译，livereload实现浏览器自动刷新（用browsersync要实现以下）
````
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
gulp.task('watch', () => {
    livereload.listen()
    gulp.watch('app/js/index.js', ['scripts'])
})
````