/*
 * @Author: adorkable-wang
 * @Date: 2024-04-06 15:52:53
 * @FilePath: \coding-standard-engineering\packages\code-lint-cli\src\index.ts
 * @Description: 入口文件
 * @module: ora 是一个用于在终端中显示加载状态的 Node.js 模块
 */
import ora from 'ora';
import scanAction from './actions/scan';
import initAction from './actions/init';
import { PKG_NAME } from './utils/constants';
import printReport from './utils/print-report';
import type { InitOptions, ScanOptions } from './types';

type IInitOptions = Omit<InitOptions, 'checkVersionUpdate'>;

/**
 * @description: 初始化 action
 * @param {IInitOptions} options
 * @return {*}
 */
export const init = async (options: IInitOptions) => {
  return await initAction({
    ...options,
    checkVersionUpdate: false,
  });
};

export const scan = async (options: ScanOptions) => {
  const checking = ora();
  checking.start(`执行 ${PKG_NAME} 代码检查`);

  const report = await scanAction(options);
  const { results, errorCount, warningCount } = report;
  let type = 'succeed';
  if (errorCount > 0) {
    type = 'fail';
  } else if (warningCount > 0) {
    type = 'warn';
  }

  checking[type]();
  if (results.length > 0) printReport(results, false);

  return report;
};
