/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
      env: 'prod', // 推荐云函数的 egg 运行环境变量修改为 prod
      rundir: '/tmp',
      logger: {
          dir: '/tmp'
      }
  })

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588515698426_516';

  // add your middleware config here
  config.middleware = [];

  // mysql配置文件
    config.mysql = {
        client: {
            // host
            host: '39.106.10.163',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: 'asdf123456A*',
            // 数据库名
            database: 'test',
        },
        app: true,        // 是否加载到 app 上，默认开启
        agent: false,    // 是否加载到 agent 上，默认关闭
    }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
