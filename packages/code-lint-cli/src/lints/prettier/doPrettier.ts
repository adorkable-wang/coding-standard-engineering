/*
 * @Author: adorkable-wang
 * @Date: 2024-04-06 15:52:53
 * @FilePath: \coding-standard-engineering\packages\code-lint-cli\src\lints\prettier\doPrettier.ts
 * @Description: 执行 prettier 格式化
 * @module: fast-glob 是一个 Node.js 模块，用于在文件系统中进行快速的文件查找操作
 */
import fg from 'fast-glob';
import { readFile, writeFile } from 'fs-extra';
import { extname, join } from 'path';
import prettier from 'prettier';

import { ScanOptions } from '../../types';
import { PRETTIER_FILE_EXT, PRETTIER_IGNORE_PATTERN } from '../../utils/constants';

export interface DoPrettierOptions extends ScanOptions {}

export async function doPrettier(options: DoPrettierOptions) {
  let files: string[] = [];
  if (options.files) {
    files = options.files.filter((name) => PRETTIER_FILE_EXT.includes(extname(name)));
  } else {
    const pattern = join(
      options.include,
      `**/*.{${PRETTIER_FILE_EXT.map((t) => t.replace(/^\./, '')).join(',')}}`,
    );
    files = await fg(pattern, {
      cwd: options.cwd,
      ignore: PRETTIER_IGNORE_PATTERN,
    });
  }
  await Promise.all(files.map(formatFile));
}

async function formatFile(filepath: string) {
  const text = await readFile(filepath, 'utf8');
  const options = await prettier.resolveConfig(filepath);
  const formatted = await prettier.format(text, { ...options, filepath });
  await writeFile(filepath, formatted, 'utf8');
}
