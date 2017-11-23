var mergeRoadhogConfig = require('@alife/scu-default-config/lib/roadhogrc').mergeRoadhogConfig

/**
 * 此处可以添加额外的roadhog配置，可以覆盖默认配置，比如主题色和接口代理
 *
 * > 此处示例了一个接口代理配置，用来在本地调试线上接口
 * > 所有以`/api`开头的请求，都代理至`http://sell.fliggy.com`这个host
 *
 * 你可以添加host:
 *   dev.sell.fliggy.com 127.0.0.1
 *   dev.sell.daily.alitrip.net 127.0.0.1
 * 然后配置router，使不同url的访问代理到不同的服务器上，实现日常/线上环境的切换
 *
 * 可以在 package.json => scripts 里添加环境变量，使浏览器自动打开你配置的host地址
 * ```
 * "start": "HOST=dev.sell.daily.alitrip.net roadhog server"
 * "win": "set HOST=dev.sell.daily.alitrip.net&&roadhog server"
 * ```
 */
module.exports = mergeRoadhogConfig({
  "proxy": {
    "/api": {
      "target": "http://sell.fliggy.com",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" },
      "router": {
        "dev.sell.fliggy.com:8000": "http://sell.fliggy.com",
        "dev.sell.daily.alitrip.net:8000": "http://sell.daily.alitrip.net"
      }
    }
  },
})
