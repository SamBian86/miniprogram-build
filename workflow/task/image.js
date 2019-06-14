module.exports = function(gulp, common) {
  const { src, dest, task, series, parallel, watch } = gulp;

  function image() {
    return src(common.config.image, {
      allowEmpty: true
    })
    .pipe(common.plugins.imagemin([
      common.plugins.imagemin.gifsicle({interlaced: true}),
      common.plugins.imagemin.jpegtran({progressive: true}),
      common.plugins.imagemin.optipng({optimizationLevel: 5}),
      common.plugins.imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(dest(common.config.dist))
    .on('end', () => {
      common.utils.console.success(`图片压缩完毕`)
    })
  }

  function image_watch(cb) {
    const watcher = watch(common.config.image, series(image));
    watcher.on('change', function(path, stats) {
      common.utils.console.warning(`${path} 图片被修改`)
    });

    watcher.on('add', function(path, stats) {
      common.utils.console.success(`新增图片 ${path}`)
    });

    watcher.on('unlink', function(path, stats) {
      common.utils.console.warning(`删除图片 ${path}`)
    });
    cb();
  }

  task('image', series(image));

  task('image:watch', parallel(image_watch))
};