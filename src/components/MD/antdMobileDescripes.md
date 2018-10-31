1、安装babel-plugin-import  https://github.com/ant-design/babel-plugin-import
  npm install babel-plugin-import --save-dev

2、安装npm install antd-mobile --save 


https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/introduce.zh-CN.md#%E5%AE%89%E8%A3%85

http://ant.design/docs/react/getting-started-cn

3、 安装babel-plugin-module-resolver

``
babel-plugin-module-resolver
``

解决通过 react-native init 创建的项目在使用时可能会报 Unable to resolve module react-dom 的错误 
修改.babelrc文件配置：
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

options可以使一个数组

[
  {
    "libraryName": "antd",
    "libraryDirectory": "lib",   // default: lib
    "style": true
  },
  {
    "libraryName": "antd-mobile",
    "libraryDirectory": "component",
  },
]


options 可以是对象
style可以为true或者‘css’

{
  "libraryName":"antd",
  "style":true,
}
{
  "libraryName": "material-ui",
  "libraryDirectory": "components",  // default: lib
  "camel2DashComponentName": false,  // default: true
}


导入js模块：

["import", { "libraryName": "antd" }]

导入js和css模块（css 内置文件）：
["import", { "libraryName": "antd", "style": "css" }]

导入js和css模块（LESS/Sass源文件）：
["import", { "libraryName": "antd", "style": true }]


注：
如果webpack配置文件添加了vendor库，babel-plugin-import将不会工作

