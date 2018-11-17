// https://blog.csdn.net/zt15732625878/article/details/78941268
const _ = require('lodash');
const path = require('path');
const httpProxy = require('http-proxy');
const Promise = require('bluebird');
const request = require('request');
const chokidar = require('chokidar');
const proxyRespJson = require('node-http-proxy-json');

const proxy = httpProxy.createProxyServer();
Promise.promisifyAll(request);

var mockData = {};
const mockDataPath = path.resolve(__dirname, '../mockData');

chokidar.watch(mockDataPath).on('change', (filepath) => {
  console.info('mock数据变化，重新加载', filepath);
  loadMockData();
});

function loadMockData() {
  try {
    Object.keys(require.cache).forEach((cachePath) => {
      if (cachePath.startsWith(mockDataPath)) {
        delete require.cache[cachePath];
      }
    });
    mockData = require(mockDataPath);
  } catch (error) {
    console.error('加载mock数据异常', error);
  }
}

proxy.on('error', (err, req, res) => {
  console.error('代理失败:', err);
});

proxy.on('proxyReq', (proxyReq) => {
});

proxy.on('proxyRes', (proxyRes, req, res) => {
  console.log(`请求代理状态: ${proxyRes.statusCode}  <==>  path: ${req.path}`);
  const useMockStatusCode = [404, 403, 500];
  if (useMockStatusCode.indexOf(proxyRes.statusCode) !== -1) {
    const _writeHead = res.writeHead

    Object.assign(res, {
      writeHead: () => {
        // 函数 apply() 方法，执行this为res，传递参数 200，
        _writeHead.apply(res, [200, proxyRes.headers])
      }
    })

    proxyRespJson(res, proxyRes.headers['content-encoding'], (body) => {
      console.info('请求远端服务异常，采用本地mock数据', req.path)
      const callback = mockData[req.path]
      // 传入req，用于部分mock获取request的数据
      return callback ? callback(req) : {}
    })
  }
});

module.exports = (app) => {
  app.get('/api/seller', function (req, res) {
    res.json({
      errno: 0,
      data: seller
    });
  });
}
