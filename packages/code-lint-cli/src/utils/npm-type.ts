/*
 * @Author: adorkable-wang
 * @Date: 2024-04-06 15:52:53
 * @FilePath: \coding-standard-engineering\packages\code-lint-cli\src\utils\npm-type.ts
 * @Description: 判断 npm 类型
 */
import { sync as commandExistsSync } from 'command-exists';

/**
 * @description: 检验输入指令是否包含 pnpm
 * @param {*} new
 * @return {*}
 */
const promise: Promise<'npm' | 'pnpm'> = new Promise((resolve) => {
  if (!commandExistsSync('pnpm')) {
    resolve('npm');
  }
  resolve('pnpm');
});

export default promise;
