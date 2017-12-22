import gulp from 'gulp'
import sequence from 'gulp-sequence'

import './tasks/scripts.js'
import './tasks/pages.js'
import './tasks/css.js'
import './tasks/browser.js'

gulp.task('default', sequence('scripts', 'css', 'pages', 'watch'))