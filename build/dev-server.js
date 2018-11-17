var path = require('path')
const opn = require('opn'); // 返回生成的子进程的promise
var webpack = require('webpack')
var express = require('express')

var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')

console.info('设置server启动配置')
var port = process.env.PORT || config.dev.port

var app = express()

console.log('编译webpack配置')
var compiler = webpack(webpackConfig)
console.log('webpack编译完成')

// 实时监控文件，发生改变时重新执行webpack编译
console.log('将编译流通过webpack-dev-middleware')
var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
  // 输出选项
	stats: {
		colors: true,
		chunks: false
	},
  watchOptions: {
    ignored: /node_modules/,
  },
})

// 页面热重载，配合webpack-dev-middleware，实现热加载功能
// webpack-hot-middleware 和 webpack-dev-middleware来实现像 webpack-dev-server 一样的热加载功能。
console.info('将编译流通过webpack-hot-middleware');
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {},
  heartbeat: 2000,
})

compiler.plugin('compilation', function (compilation) {
  // 当合成页面之前执行毁掉，调用中间件 emit一个action为reload的事件，
  // 对应另一边的client订阅的事件，实现浏览器的刷新
	compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
		hotMiddleware.publish({action: 'reload'})
		cb()
	})
})

console.log('静态文件托管')
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

console.info('设置代理信息');
require('./dev-proxy')(app);

console.info('添加history-fallback中间件')
app.use(require('connect-history-api-fallback')())

console.info('添加webpack-dev-middleware中间件');
app.use(devMiddleware)

console.info('添加webpack-dev-middleware中间件');
app.use(hotMiddleware)

const uri = `http://localhost:${port}`;
console.info('> Starting dev server...');
console.info('设置webpack-dev-middleware中间件编译后的回调');

devMiddleware.waitUntilValid(() => {
  console.info(`> Listening at ${uri}\n`);
  opn(uri);
});

console.info(`server开始监听端口${port}`);
const server = app.listen(port);
