const gulp = require('gulp')
const { task, series, parallel } = gulp
const fs = require('fs')
const common = require('./workflow/common')
const taskPath = 'workflow/task'

console.log(`plugins:`, common.plugins)

fs.readdirSync(taskPath)
  .filter(function(file) {
    // 只处理js文件
    return file.match(/js$/)
  })
  .forEach(function(_file, index, arr) {
    // common.utils.console.warning(`./${taskPath}/${_file}`)
    require('./' + taskPath + '/' + _file)(gulp, common)
  })

// 开发模式
task(
  'default',
  series(
    series(
      'info',
      'clean',
      'markdown',
      'image',
      'templete',
      'json',
      'style:dev',
      'script',
      'finish:dev'
    ),
    parallel(
      'clean:watch',
      'markdown:watch',
      'image:watch',
      'templete:watch',
      'json:watch',
      'style:watch',
      'script:watch'
    )
  )
)

// 打包发布
task(
  'build',
  series(
    'info',
    'clean',
    'markdown',
    'image',
    'templete',
    'json',
    'style:build',
    'script',
    'finish:build'
  )
)
