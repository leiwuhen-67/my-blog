(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{470:function(s,t,n){"use strict";n.r(t);var e=n(4),a=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("好久没有手动从头开始搭建一个新项目了，最近从头搭建一个项目，安装 vant 时报如下错误"),t("br"),s._v(" "),t("img",{attrs:{src:"https://s3.bmp.ovh/imgs/2024/05/24/79131e433610ab18.png",alt:""}})]),s._v(" "),t("p",[s._v("从报错信息看，是因为 eslint-plugin-vue 与 @vue/eslint-config-standard 版本不兼容导致的。")]),s._v(" "),t("p",[s._v("这里有两种解决办法：")]),s._v(" "),t("p",[s._v("1、通过 --force 或 --legacy-peer-deps 命令来强制安装，能安装成功，但是可能会导致未知错误。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install vant "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("S")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("force  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或 npm install vant -S --legacy-peer-deps")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("2、按报错的信息来看，可以降级 eslint-plugin-vue 的版本来解决。"),t("br"),t("br"),s._v("\n在 package.json 中可以看到 @vue/eslint-config-standard 的版本是 6.1.0，而 eslint-plugin-vue 的版本是 8.0.3，从报错信息看，与之对应的 eslint-plugin-vue 版本是 7.0.0，因此可以将 eslint-plugin-vue 降级到 7.0 版本")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("npm install eslint"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("vue@"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("现在重新安装 vant 版本发现是可以解决问题的")])])}),[],!1,null,null,null);t.default=a.exports}}]);