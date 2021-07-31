// 自动添加浏览器前缀
const autoprefixer = require("autoprefixer");
// 引入文件
const postcssImport = require("postcss-import");
// 代码压缩
// const cssnano = require('cssnano');
// 下一代css语法(可使用css语法)
// const cssnext = require('postcss-cssnext');
// 提示错误信息
// const stylelint = require("stylelint");
// 生成雪碧图
// const sprites = require('postcss-sprites');

module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [">0%"],
    }),
    postcssImport,
    // cssnano,
    // cssnext,
    // stylelint({
    //   "rules" : {
    //     "color-no-invalid-hex": true,
    //   }
    // }),
    // sprites({
    //   spritePath: "./dist",
    // }),
  ]
};
