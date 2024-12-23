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
    ],
  };