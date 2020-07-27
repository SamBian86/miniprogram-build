module.exports = function (gulp, common) {
  const { src, dest, task, series, parallel, watch, lastRun } = gulp

  function sss() {
    return src(common.config.sss, {
      since: lastRun(sss)
    })
      .pipe(common.plugins.changed(common.config.sss))
      .pipe(
        common.plugins.htmlmin({
          collapseWhitespace: true,
          removeComments: true,
          keepClosingSlash: true,
          removeEmptyAttributes: true
        })
      )
      .pipe(dest(common.config.dist))
      .on('end', () => {
        common.utils.console.success(`${common.config.sss} 文件编译成功`)
      })
  }

  function sss_watch() {
    const watcher = watch(common.config.sss, series(sss))
    watcher.on('change', function (path, stats) {
      common.utils.console.warning(`${path} 文件被修改`)
    })

    watcher.on('add', function (path, stats) {
      common.utils.console.success(`新增文件 ${path}`)
    })

    watcher.on('unlink', function (path, stats) {
      common.utils.console.warning(`删除文件 ${path}`)
    })
  }

  task('sss', series(sss))

  task('sss:watch', parallel(sss_watch))
}
