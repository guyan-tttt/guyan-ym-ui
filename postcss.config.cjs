/* eslint-env node */
module.exports = {
    plugins: [
      require("postcss-nested"), // 兼容嵌套语法
      require("postcss-each-variables"), // 兼容变量
      // require("postcss-each"), // 兼容each语法
      require("postcss-each")({
        plugins: {
          beforeEach: [require("postcss-for"), require("postcss-color-mix")],
        },
      }),
      // 添加浏览器前缀，提高兼容性
      require('autoprefixer')({
        overrideBrowserslist: [
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "ff > 31",
          //'last 2 versions', // 所有主流浏览器最近2个版本
      ],grid: true})
    ],
  };