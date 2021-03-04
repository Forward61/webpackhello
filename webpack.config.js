const HtmlWebpackPlugin = require('html-webpack-plugin')

const { resolve } = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolve(__dirname, 'dist')
   },
  /* 
    development：开发环境
    production：生产环境
  */
  // 模式的配置
  mode: 'development',
  
  module: {
    rules: [
				{ test: /\.css$/, use: ["style-loader", "css-loader"] },
				{
					test: /\.(jpg|png|gif)$/,
					loader: 'url-loader',
					options: {
					// 图片大小小于8kb，就会被处理成为base64
					// 优点：减少请求数量，减轻服务器压力
					// 缺点：图片体积会更大，文件请求速度会更慢
					limit: 8 * 1024,
					// 控制命名字符长度
					name:'[hash:10].[ext]',
  },
				},
			],
  },
  plugins: [
    // plugins的详细配置
    new HtmlWebpackPlugin({
      // 等于说就是复制这个./src/index.html，并自动引入打包输出的所有资源
      template: './src/index.html'
    }),
  ],
  mode: 'development',
}

