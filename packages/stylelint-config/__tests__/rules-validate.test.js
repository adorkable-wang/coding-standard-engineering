const assert = require('assert');
const stylelint = require('stylelint');
const path = require('path');

describe('test rules-validate.test', () => {
  it('validate default', async () => {
    const filePath = [path.join(__dirname, './fixtures/index.css')];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'), // 指定stylelint配置文件路径
      files: filePath, // 指定要检测的文件路径数组
      fix: false,
    });
    if (result?.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length > 0);
    }
  });

  it('validate sass', async () => {
    const filePath = [path.join(__dirname, './fixtures/sass-test.scss')];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'), // 指定stylelint配置文件路径
      files: filePath, // 指定要检测的文件路径数组
      fix: false,
    });
    if (result?.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length > 0);
    }
  });

  it('validate less', async () => {
    const filePath = [path.join(__dirname, './fixtures/less-test.less')];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'), // 指定stylelint配置文件路径
      files: filePath, // 指定要检测的文件路径数组
      fix: false,
    });
    if (result?.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length > 0);
    }
  });

  it('validate css-module', async () => {
    const filePath = [path.join(__dirname, './fixtures/css-module.scss')];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'), // 指定stylelint配置文件路径
      files: filePath, // 指定要检测的文件路径数组
      fix: false,
    });
    if (result?.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length > 0);
    }
  });
});
