/*
 * @Author: leiwuhen-67 2811401616@qq.com
 * @Date: 2024-07-01 14:38:59
 * @LastEditors: leiwuhen-67 2811401616@qq.com
 * @LastEditTime: 2024-07-01 15:39:08
 * @FilePath: /vuepress-theme-vdoing-template/docs/.vuepress/config/nav.ts
 */
// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  // 导航配置
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '',
        items: [
          {
            text: '《Vue》笔记',
            link: '/note/vue/'
          }, {
            text: '《React》笔记',
            link: '/note/react/'
          }, {
            text: '《NodeJs》笔记',
            link: '/note/node/'
          }, {
            text: '《CSS》笔记',
            link: '/note/css/'
          }, {
            text: '《Redis》笔记',
            link: '/note/redis/'
          }
        ]
      }
    ]
  },
  {
    text: 'HarmonyOS相关',
    link: '/harmony/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '',
        items: [
          {
            text: '基础入门',
            link: '/harmony/base/'
          }
        ]
      }
    ]
  },
  {
    text: '随笔',
    link: '/random/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '',
        items: [
          {
            text: '《Mock》笔记',
            link: '/random/mock/'
          }, {
            text: '《MySQL》笔记',
            link: '/random/mysql/'
          }, {
            text: '《Git》相关',
            link: '/random/git/'
          }
        ]
      }
    ]
  },
  { text: '影音视听', link: '/movie/' },
  { text: '收藏', link: '/collect/website/'},
  { text: '关于', link: '/pages/5699bd/' }
];
