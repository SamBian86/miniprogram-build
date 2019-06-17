#小程序开发构建工具

此工具主要用于各类小程序的压缩,请自行创建 src 目录,先将微信开发者工具初始化小程序项目的目录指向 src 目录
执行```gulp```
然后在将目录指向 dist 目录,此时在 src 目录中开发保存会将最新改动的代码进行差量编译到 dist 对应的目录中。

###目录说明

<pre>
|-- github
    |-- README.md
    |-- directoryList.md
    |-- gulpfile.js
    |-- package-lock.json
    |-- package.json
    |-- dist                        // 小程序编译代码
    |-- src                         // 小程序源码
    |   |-- app.js
    |   |-- app.json
    |   |-- app.wxss
    |   |-- project.config.json
    |   |-- pages
    |   |   |-- index
    |   |   |   |-- index.js
    |   |   |   |-- index.json
    |   |   |   |-- index.wxml
    |   |   |   |-- index.wxss
    |   |   |-- logs
    |   |       |-- logs.js
    |   |       |-- logs.json
    |   |       |-- logs.wxml
    |   |       |-- logs.wxss
    |   |-- utils
    |       |-- util.js
    |-- workflow
        |-- common.js
        |-- config.js
        |-- utils.js
        |-- task
            |-- clean.js
            |-- finish.js
            |-- image.js
            |-- info.js
            |-- json.js
            |-- markdown.js
            |-- script.js
            |-- style.js
            |-- templete.js
</pre>
