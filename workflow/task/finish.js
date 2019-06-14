module.exports = function(gulp, common) {
  const { src, dest, task, series, parallel, watch } = gulp;

  function finish_dev(cb) {
    common.utils.console.system(`===== 启动完毕 打开开发者工具可以进行【${common.utils.appType[common.packages.appType]}】开发了 =====`);
    cb();
  }

  function finish_build(cb) {
    common.utils.console.system(`===== 打包完毕 打开开发者工具可以进行【${common.utils.appType[common.packages.appType]}】上传发布了 =====`);
    cb();
  }

  task('finish:dev', series(finish_dev));

  task('finish:build', series(finish_build));
};