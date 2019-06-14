module.exports = function(gulp, common) {
  const { src, dest, task, series, parallel, watch, lastRun } = gulp;

  function sass() {
    return src(common.config.style, {
      since: lastRun(sass)
    })
    .pipe(common.plugins.changed(common.config.style))
    .pipe(common.plugins.sass({outputStyle: 'compressed'}).on('error', common.plugins.sass.logError))
    .pipe(dest(common.config.dist))
    // .on('end', () => {
    //   common.utils.console.success(`css 文件编译成功`)
    // })
  }

  function rename() {
    return src(common.config.distCss, {
      since: lastRun(rename)
    })
    .pipe(common.plugins.changed(common.config.distCss))
    .pipe(common.plugins.rename({extname: common.config.cssName}))
    .pipe(dest(common.config.dist))
    .on('end', () => {
      common.utils.console.success(`${common.config.cssName} 文件编译成功`)
    })
  }

  function remove() {
    return src(common.config.distCss)
    .pipe(common.plugins.vinylPaths(common.plugins.del))
  }

  function style_watch() {
    const watcher = watch(common.config.style, series(sass, rename, remove));
    watcher.on('change', function(path, stats) {
      common.utils.console.warning(`${path} ${common.config.cssName}文件被修改`)
    });

    watcher.on('add', function(path, stats) {
      common.utils.console.success(`新增${common.config.cssName}文件 ${path}`)
    });

    watcher.on('unlink', function(path, stats) {
      common.utils.console.warning(`删除${common.config.cssName}文件 ${path}`)
    });
  }

  task('style', series(sass, rename, remove));

  task('style:watch', parallel(style_watch))
};