#!/usr/bin/env sh###

# 抛出异常信息
set -e


# 获取 Git 仓库的远程地址
push_addr = `git remote get-url origin`
# 获取当前 Git 仓库的提交信息（包括分支、最近的标签、以及 commit 的哈希值）
commmit_info = `git describe --all --always --long`

dist_path = docs/.vuepress/dist

push_branch = gh-pages

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd $dist_path

git init
git add -A
git commit -m "deploy: $commmit_info"
git push -f $push_addr HEAD:$push_branch

cd -
rm -rf $dist_path
