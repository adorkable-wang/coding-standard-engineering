const path = require('path');
const requireAll = require('require-all');

exports.rules = requireAll({
  dirname: path.join(__dirname, 'rules'),
});

exports.configs = requireAll({
  dirname: path.join(__dirname, 'configs'),
});

// exports.processors 对象定义了一组处理器，其中 .json 键指定了处理 .json 文件的预处理器。
// 在预处理器对象中，有一个 preprocess 方法，用于定义预处理函数。
// preprocess 方法接收一个参数 text，即待处理的代码文本，
// preprocess 方法返回一个数组，数组的每个元素是经过处理后的代码片段。
// 将 JSON 文本包裹在 module.exports = 中，以便后续 ESLint 可以解析它
exports.processors = {
  '.json': {
    preprocess(text) {
      // 转为 js 文件
      return [`module.exports = ${text};`];
    },
  },
};
