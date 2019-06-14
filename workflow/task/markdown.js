module.exports = function(gulp, common) {
  const { src, dest, task, series, parallel, watch } = gulp;

  function markdown(cb) {
    common.plugins.exec(`npm run mddir ${common.config.gulpRoot}`, function(err, stdout, stderr){
      if(err) {
        common.utils.console.failed(`生成markdown文件失败`)
        cb(err);
      } else {
        common.utils.console.success(`生成markdown文件成功`)
        cb();
      }
    })
  }

  function markdown_watch() {
    const watcher = watch(common.config.markdownWatch);
    watcher.on('change', function(path, stats) {
      common.utils.console.warning(`${path} markdown文件被修改`)
    });

    watcher.on('add', function(path, stats) {
      common.utils.console.success(`新增markdown文件 ${path}`)
      series(markdown)
    });

    watcher.on('unlink', function(path, stats) {
      common.utils.console.warning(`删除markdown文件 ${path}`)
    });
  }

  task('markdown', series(markdown));

  task('markdown:watch', parallel(markdown_watch))
};