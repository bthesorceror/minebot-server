const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const browserify = require('browserify')
const vueify = require('vueify')

gulp.task('build', (done) => {
  browserify('./client/index.js')
    .transform(vueify)
    .bundle()
    .pipe(fs.createWriteStream(path.join(__dirname, 'public', 'bundle.js')))
    .once('end', () => {
      done()
    })
    .once('error', (err) => {
      done(err)
    })
})
