import gulp from 'gulp'
import gulpif from 'gulp-if'
import gls from 'gulp-live-server'
import args from './util/args'

gulp.task('serve', (cb) => {
    if (!args.watch) return cb()
    //2. run script with cwd args, e.g. the harmony flag
    var server = gls.new(['--harmony', 'server/bin/www']);
    //this will achieve `node --harmony myapp.js`
    //you can access cwd args in `myapp.js` via `process.argv`
    server.start();

    // css js ejs发生改变
    gulp.watch(['server/public/**/*.js', 'server/public/**/*.css', 'server/views/**/*.ejs'], (file) => {
        server.notify.apply(server, [file])
    })

    // 需求重启服务的文件
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], () => {
        server.start.bind(server)()
    })
})

function Foo() {
    var i = 0;
    return function() {
        console.log(i++);
    }
}
 
var f1 = Foo(),
    f2 = Foo();
f1();
f1();
f2();