/*
 * @Author: leiwuhen-67 2811401616@qq.com
 * @Date: 2024-07-01 14:38:59
 * @LastEditors: leiwuhen-67 2811401616@qq.com
 * @LastEditTime: 2024-07-01 16:47:50
 * @FilePath: /vuepress-theme-vdoing-template/docs/.vuepress/config/plugins.ts
 */
// 插件配置, 详见 https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html

import { UserPlugins } from "vuepress/config";
import fs from "fs";
import { resolve } from "path";

// 配置插件，推荐使用 Babel 式, 根据自己插件情况修改插件配置
export default <UserPlugins>[
  [
    "sitemap",
    {
      hostname: `https://${fs.readFileSync(
        resolve(__dirname, "../public", "CNAME")
      )}`,
    },
  ],
  ["pangu"],
  [
    "one-click-copy",
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ],
      copyMessage: "复制成功",
      duration: 1000,
      showInMobile: false,
    },
  ],
  [
    "zooming",
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  [ "fulltext-search" ],
  [
    'vuepress-plugin-comment', // 评论
    {
      // choosen: 'valine',
      // options: {
      //   el: '#valine-vuepress-comment',
      //   appId: 'XxLfqbfd6hy8JQUhqHB6aQWk-gzGzoHsz',
      //   appKey: 'TnmDGAdACBFcHPkXPlaCr1fI'
      // }
      choosen: "gitalk",
      options: {
        clientID: 'c0968b8f34a4decd2cd9',
        clientSecret: '1f1af0bb760d85f86b33f27dcebd77d8757fd37f',
        repo: 'blogComments', // GitHub 仓库
        owner: 'leiwuhen-67', // GitHub仓库所有者
        admin: ['leiwuhen-67'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ]
];
