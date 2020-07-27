module.exports = function (gulp, common) {
  const { src, dest, task, series, parallel, watch, lastRun } = gulp

  function script() {
    return src(common.config.script, {
      since: lastRun(script)
    })
      .pipe(common.plugins.changed(common.config.script))
      .pipe(
        common.plugins.babel({
          presets: ['es2015', 'stage-0']
        })
      )
      .pipe(common.plugins.uglify())
      .pipe(dest(common.config.dist))
      .on('end', () => {
        common.utils.console.success(`script 文件编译成功`)
      })
  }

  function script_watch() {
    const watcher = watch(common.config.script, series(script))
    watcher.on('change', function (path, stats) {
      common.utils.console.warning(`${path} script文件被修改`)
    })

    watcher.on('add', function (path, stats) {
      common.utils.console.success(`新增script文件 ${path}`)
    })

    watcher.on('unlink', function (path, stats) {
      common.utils.console.warning(`删除script文件 ${path}`)
    })
  }

  task('script', series(script))

  task('script:watch', parallel(script_watch))
}
