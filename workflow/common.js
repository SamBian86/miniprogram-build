const packages = require('../package.json');
const plugins = require('gulp-load-plugins')();
const config = require('./config');
const utils = require('./utils');
const common = {};

plugins.vinylPaths = require('vinyl-paths');
plugins.del = require('del');
plugins.sass = require('gulp-sass');
plugins.sass.compiler = require('node-sass');
plugins.exec = require('child_process').exec;

common.plugins = plugins;
common.config = config[packages.appType];
common.utils = utils;
common.packages = packages;

module.exports = common;