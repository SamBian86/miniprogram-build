module.exports = function(gulp, common) {
  const { src, dest, task, series, parallel, watch } = gulp;

  function info(cb) {
    common.utils.console.system(`===== 当前正在为【${common.utils.appType[common.packages.appType]}】进行构建 =====`);
    cb();
  }

  task('info', series(info));
};