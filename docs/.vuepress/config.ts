/*
 * @Author: leiwuhen-67 2811401616@qq.com
 * @Date: 2024-07-01 14:38:59
 * @LastEditors: leiwuhen-67 2811401616@qq.com
 * @LastEditTime: 2024-07-01 15:07:50
 * @FilePath: /vuepress-theme-vdoing-template/docs/.vuepress/config.ts
 */
// 示例全部使用 .ts 配置, 详见说明 https://v1.vuepress.vuejs.org/zh/guide/typescript-as-config.html

import { defineConfig4CustomTheme } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import themeConfig from "./config/themeVdoingConfig";
import markdown from "./config/markdown";
import plugins from "./config/plugins";
import head from "./config/head";

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  title: "leiwuhen-67's blog", //站点标题, 建议修改
  description: "web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,css3,html5,Node,git,github等技术文章。", //描述, 建议修改
  dest: "dist", //输出目录, 默认是 dist,无需修改
  // base: "/vdoing-template/", //部署站点的基础路径, 默认是 /, 不懂不要开启
  shouldPrefetch: () => false, //是否开启预加载, 建议不开启, 无需修改
  head: head, //全局头部信息配置, 如需修改请修改 config/head.ts
  theme: "vdoing", //主题, 无需修改
  themeConfig, //主题配置, 如需修改请修改 config/themeVdoingConfig.ts
  markdown, //markdown 相关配置, 如需修改请修改 config/markdown.ts
  plugins, //插件配置, 如需修改请修改 config/plugins.ts
});
