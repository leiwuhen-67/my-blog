#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
 
# 进入生成的文件夹
cd docs/.vuepress/dist

echo 'www.jiangfeng.xyz' > CNAME
 
git init
git add -A
git commit -m 'deploy'
 
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:leiwuhen-67/my-blog.git master:dev
 
cd -
rm -rf docs/.vuepress/dist
