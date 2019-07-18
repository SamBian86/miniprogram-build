module.exports = function(gulp, common) {
  const { src, dest, task, series, parallel, watch, lastRun } = gulp

  function templete() {
    return src(common.config.template, {
      since: lastRun(templete)
    })
      .pipe(common.plugins.changed(common.config.template))
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
        common.utils.console.success(
          `${common.config.templateName} 文件编译成功`
        )
      })
  }

  function templete_watch() {
    const watcher = watch(common.config.template, series(templete))
    watcher.on('change', function(path, stats) {
      common.utils.console.warning(`${path} 文件被修改`)
    })

    watcher.on('add', function(path, stats) {
      common.utils.console.success(`新增文件 ${path}`)
    })

    watcher.on('unlink', function(path, stats) {
      common.utils.console.warning(`删除文件 ${path}`)
    })
  }

  task('templete', series(templete))

  task('templete:watch', parallel(templete_watch))
}
