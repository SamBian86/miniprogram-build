module.exports = function (gulp, common) {
  const { src, dest, task, series, parallel, watch, lastRun } = gulp

  function json() {
    return (
      src(common.config.json, {
        since: lastRun(json)
      })
        .pipe(common.plugins.changed(common.config.json))
        // jsonMinify会将{}的json配置自动忽略，所以只能以处理html的方式来进行简单压缩
        .pipe(
          common.plugins.htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            keepClosingSlash: true,
            removeEmptyAttributes: true
          })
        )
        // .pipe(common.plugins.jsonMinify())
        .pipe(dest(common.config.dist))
        .on('end', () => {
          common.utils.console.success(`json 文件编译成功`)
        })
    )
  }

  function json_watch() {
    const watcher = watch(common.config.json, series(json))
    watcher.on('change', function (path, stats) {
      common.utils.console.warning(`${path} json文件被修改`)
    })

    watcher.on('add', function (path, stats) {
      common.utils.console.success(`新增json文件 ${path}`)
    })

    watcher.on('unlink', function (path, stats) {
      common.utils.console.warning(`删除json文件 ${path}`)
    })
  }

  task('json', series(json))

  task('json:watch', parallel(json_watch))
}
