# webpackhello
让webpack5再飞一会儿，夯实webpack4吧（基础篇）
https://segmentfault.com/a/1190000039304460
注意：写在webpack.config.js里面，而不是写在package.json里面
重点来了，webpack可以通过loader去处理那些非JavaScript文件的资源
loader相关的配置我们需要写在module里面如：
https://webpack.js.org/concepts/#loaders

注意（可能需要一次性引入css-loading等等）
加载图片我们需要引入url-loader
$ npm i -D url-loader

npm i -D style-loader css-loader url-loader file-loader 
html-webpack-plugin
