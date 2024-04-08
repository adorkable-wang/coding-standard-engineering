/*
 * @Author: adorkable-wang
 * @Date: 2024-04-06 15:52:53
 * @FilePath: \coding-standard-engineering\packages\code-lint-cli\src\lints\stylelint\doStylelint.ts
 * @Description: 执行 stylelint
 * @module: fast-glob 是一个 Node.js 模块，用于在文件系统中进行快速的文件查找操作
 */
import fg from 'fast-glob';
import { extname, join } from 'path';
import stylelint from 'stylelint';

import { PKG, ScanOptions } from '../../types';
import { STYLELINT_FILE_EXT, STYLELINT_IGNORE_PATTERN } from '../../utils/constants';
import { formatStylelintResults } from './formatStylelintResults';
import { getStylelintConfig } from './getStylelintConfig';

export interface DoStylelintOptions extends ScanOptions {
  pkg: PKG;
}

export async function doStylelint(options: DoStylelintOptions) {
  let files: string[];
  if (options.files) {
    files = options.files.filter((name) => STYLELINT_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = join(
      options.include,
      `**/*.{${STYLELINT_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: STYLELINT_IGNORE_PATTERN,
    });
  }
  const data = await stylelint.lint({
    ...getStylelintConfig(options, options.pkg, options.config),
    files,
  });
  return formatStylelintResults(data.results, options.quiet);
}
