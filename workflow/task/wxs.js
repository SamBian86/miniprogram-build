module.exports = function (gulp, common) {
  const { src, dest, task, series, parallel, watch, lastRun } = gulp

  function wxs() {
    return src(common.config.wxs, {
      since: lastRun(wxs)
    })
      .pipe(common.plugins.changed(common.config.wxs))
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
        common.utils.console.success(`${common.config.wxs} 文件编译成功`)
      })
  }

  function wxs_watch() {
    const watcher = watch(common.config.wxs, series(wxs))
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

  task('wxs', series(wxs))

  task('wxs:watch', parallel(wxs_watch))
}
