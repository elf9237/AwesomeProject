# ywl

## 开发环境配置

请参考： <http://reactnative.cn/docs/0.51/getting-started.html>

除此之外，还需安装 android ndk。android ndk 下载地址：
https://developer.android.google.cn/ndk/downloads/
(目前先下载最新的版本，最新版在 android 6.0 以上验证可行。后续测试中如果发现不支持 android 6.0 以下，我再通知大家更换其他版本。)

下载完成后，需要新增 ndk 环境变量：
变量名：ANDROID_NDK_HOME
变量值：D:\android-ndk-r17b(请修改为你自己的安装路径)

在 ywl/android 路径下的 local.properties 文件中(如果没有，需新建)，新增：
sdk.dir=D\:\\AndroidSDK(请修改为你自己的安装路径，这一行如已存在，请无视)
ndk.dir=D\:\\android-ndk-r17b(请修改为你自己的安装路径)

## 运行

1.  首先 clone 本代码仓库
2.  在 clone 好的目录中运行`yarn`
3.  运行`react-native run-android`或是`react-native run-ios`

## 编辑器配置

建议使用[Visual Studio Code](https://code.visualstudio.com/download)并安装如下插件：

- ESlint (用于统一代码风格)
- Flow Language Support （用于支持 Flow 类型标注语法）
- Prettier - Code formatter （用于自动修正代码风格）
- React Native Tools （RN 开发辅助工具）
- colorize (颜色标注)
- Gitlens (git 工具)

同时在 USER SETTING 中添加以下配置：

```
"files.autoSave": "afterDelay",
"editor.formatOnSave": true,
"prettier.eslintIntegration": true,
"flow.useNPMPackagedFlow": true,
"javascript.validate.enable": false,
"colorize.languages": [
    "javascript"
],
"colorize.files_extensions": [
    ".js"
],
```

## 目录结构说明

```
actions         redux actions
components      可复用的组件
constants       一些全局引用的常量
database        Realm数据库
docs            接口文档
i18n            多语言文件
images          全局可复用的图片（components和screens内可能也有images目录）
reducers        redux reducers
sagas           redux sagas
screens         全屏页面
store           redux store配置
types           Flowtypes标记
utils           工具模块
web-native      web端的一些适配代码
```

## 文件命名规则

1.  如果文件默认导出的是 React 组件，则以大写字母开头，如`Link.js`.
2.  除 1 以外的文件皆以小写字母开头.
3.  如果某文件负责导出此文件所在目录的所有其他模块，则其名字和目录名相同。如`components/components.js`.
