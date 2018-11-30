1、安装 babel-plugin-import https://github.com/ant-design/babel-plugin-import
npm install babel-plugin-import --save-dev

2、安装 npm install antd-mobile --save

https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/introduce.zh-CN.md#%E5%AE%89%E8%A3%85

http://ant.design/docs/react/getting-started-cn

3、 安装 babel-plugin-module-resolver

`babel-plugin-module-resolver`

解决通过 react-native init 创建的项目在使用时可能会报 Unable to resolve module react-dom 的错误
修改.babelrc 文件配置：
{
"presets": ["react-native"],
"plugins": [["import", { "libraryName": "antd-mobile" }]],
"env": {
"development": {
"plugins": ["transform-react-jsx-source"]
}
}
}

rm -rf node_modules && npm install

npm start -- -- reset-cache

exp start --tunnel

装载：

{
"plugins":[["import",options]]
}

options 可以使一个数组

[

{

"libraryName": "antd",

"libraryDirectory": "lib", // default: lib

"style": true

},

{

"libraryName": "antd-mobile",

"libraryDirectory": "component",

},

]

options 可以是对象
style 可以为 true 或者‘css’

{
"libraryName":"antd",
"style":true,
}
{
"libraryName": "material-ui",
"libraryDirectory": "components", // default: lib
"camel2DashComponentName": false, // default: true
}

导入 js 模块：

["import", { "libraryName": "antd" }]

导入 js 和 css 模块（css 内置文件）：
["import", { "libraryName": "antd", "style": "css" }]

导入 js 和 css 模块（LESS/Sass 源文件）：
["import", { "libraryName": "antd", "style": true }]

注：
如果 webpack 配置文件添加了 vendor 库，babel-plugin-import 将不会工作

3、babel-plugin-root-import

yarn add babel-plugin-root-import --dev

我们使用的目标要达到以下的使用效果

// 通常
import SomeExample from '../../../some/example.js';
const OtherExample = require('../../../other/example.js');

// 使用了 Babel-Root-Importer 之后
import SomeExample from '~/some/example.js';
const OtherExample = require('~/other/example.js');

---

配置
增加一个.babelrc 在项目根目录，并写入(如果已有，则加入 plugins)：

{
"plugins": [
["babel-plugin-root-import"]
]
}
1
2
3
4
5
温馨提示
已有项目，记得清理一个缓存(先关闭所有控制侦听程序)

watchman watch-del-all
npm start -- --reset-cache
1
2
扩展
自定义根路径前缀
如果你想把 src/js 作为项目根入口，你可以修改.babelrc 为以下内容：

{
"plugins": [
["babel-plugin-root-import", {

"rootPathSuffix": "src/js"

}]
]
}
1
2
3
4
5
6
7
如何你想修改项目的默认根入口别名，默认~

{
"plugins": [
["babel-plugin-root-import", {

"rootPathPrefix": "@"

}]
]
}
1
2
3
4
5
6
7
也可以定义多组别名入口

{
"plugins": [
["babel-plugin-root-import", [{

"rootPathPrefix": "~", // `~` 默认 

"rootPathSuffix": "src/js"

}, {

"rootPathPrefix": "@",

"rootPathSuffix": "other-src/js"

}, {

"rootPathPrefix": "#",

"rootPathSuffix": "../../src/in/parent" //也支持父级路径 

}]]
]
}

// 然后你就可以这样使用插件了。
import foo from '~/my-file';
const bar = require('@/my-file');
