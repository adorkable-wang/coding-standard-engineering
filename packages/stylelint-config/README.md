<!--
 * @Author: adorkable-wang adorkable_wang@163.com
 * @Date: 2024-04-03 16:32:55
 * @LastEditors: adorkable-wang adorkable_wang@163.com
 * @LastEditTime: 2024-04-03 23:39:21
 * @FilePath: \coding-standard-engineering\packages\stylelint-config\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# markdownlint-config-encode

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install stylelint-config-encode stylelint stylelint-scss --save-dev
```

## 使用

在 `.stylelintrc` 中继承本包:

```json
{
  "extends": "stylelint-config-encode"
}
```
