#小程序开发构建工具

此工具主要用于各类小程序的压缩,请自行创建src目录,先将微信开发者工具初始化小程序项目的目录指向src目录,执行gulp dev后在将目录指向dist目录,此时在src目录中开发保存会将最新改动的代码进行差量编译到dist对应的目录中。

###目录说明
<pre>
|-- gulp-weixin
    |-- gulpfile.js                           // gulp
    |-- package-lock.json 
    |-- package.json
    |-- README.md
    |-- src                                   // 小程序代码
    |   |-- app.js
    |   |-- app.json
    |   |-- app.wxss
    |   |-- project.config.json
    |   |-- sitemap.json
    |   |-- images
    |   |-- pages
    |   |   |-- index
    |   |       |-- index.js
    |   |       |-- index.json
    |   |       |-- index.wxml
    |   |       |-- index.wxss
    |   |-- utils
    |       |-- util.js
    |-- tools
        |-- utils.js
</pre>
