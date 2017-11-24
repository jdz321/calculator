var mergeRoadhogConfig = require('@alife/scu-default-config/lib/roadhogrc').mergeRoadhogConfig

module.exports = mergeRoadhogConfig({
  "publicPath": "./",
  "extraBabelPlugins": [
    "transform-runtime",
    "transform-decorators-legacy",
    "lodash",
    [
      "import", 
      [
        { "libraryName": "antd", "style": true },
        { "libraryName": "antd-mobile", "style": true },
      ],
    ],
  ],
})
