const pathUtil = require('path');


const APP_ROOT = pathUtil.join(__dirname, '..');

const env = ({
  production: 'prod',
  test: 'test'
})[process.env.NODE_ENV] || 'dev';


/**
 * 服务器相关配置
 */
exports.server = {
  port: 9000
};


/**
 * 模块目录
 */
exports.modulesDir = pathUtil.join(APP_ROOT, 'web');


/**
 * 服务
 */
exports.services = {
};


/**
 * 模板帮助方法
 */
exports.helpers = {
};


/**
 * web中间件相关配置
 */
exports.web = {
  // 用于设置app.keys, 实际应用需要重新产生一个
  keys: ['FDDCA942-5EBE-4D37-BC52-6D7303F014E2'],

  // https://github.com/koajs/response-time
  // rtime: {},
  // conditional: true,
  // etag: true,

  //favicon: pathUtil.join(APP_ROOT, 'public/favicon.ico'),

  static: {
    root: pathUtil.join(APP_ROOT, 'public')
  }
};


/**
 * 前端资源相关配置
 */
exports.assets = {
  // 只使用简单模式，前端资源主要由webpack处理
  simple: true,
  // 对资源进行hash重命名，适合发布到CDN等场景
  digest: true,
  // 资源前缀
  prefix: '/g',
  // 如果婺源发到CDN，则需要设置资源的URL前缀
  //urlPrefix: 'https://cdn.static.com/hello-react/'
};

 