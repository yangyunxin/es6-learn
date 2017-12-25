import gulp from 'gulp'
import sequence from 'gulp-sequence'
import args from './tasks/util/args'

import gls from 'gulp-live-server'

import './tasks/clean.js'
import './tasks/scripts.js'
import './tasks/pages.js'
import './tasks/css.js'
import './tasks/browser.js'
import './tasks/server.js'

gulp.task('default', sequence('clean', 'pages', 'scripts', 'css', ['watch', 'serve']))




// gulp.task('default',['serve'])