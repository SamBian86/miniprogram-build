module.exports = function(gulp, common) {
  const { src, dest, task, series, parallel, watch } = gulp;

  function clean() {
    return src(common.config.dist, {
      allowEmpty: true
    })
    .pipe(common.plugins.vinylPaths(common.plugins.del))
    .on('end', () => {
      common.utils.console.success(`删除目录 ${common.config.dist} 成功`)
    })
  }

  function clean_watch(cb) {
    const watcher = watch(common.config.dist);
    watcher.on('change', function(path, stats) {
      common.utils.console.warning(`${path} 文件被修改`)
    });

    watcher.on('add', function(path, stats) {
      common.utils.console.success(`新增文件 ${path}`)
    });

    watcher.on('unlink', function(path, stats) {
      common.utils.console.warning(`删除文件 ${path}`)
    });
    cb();
  }

  task('clean', series(clean));

  task('clean:watch', parallel(clean_watch))
};