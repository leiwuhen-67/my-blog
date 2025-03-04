(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{414:function(s,e,a){"use strict";a.r(e);var n=a(4),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("这里均已 Mac 环境为例")]),s._v(" "),e("h1",{attrs:{id:"_1、安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装"}},[s._v("#")]),s._v(" 1、安装")]),s._v(" "),e("p",[s._v("1、下载 ohpm 工具包，"),e("a",{attrs:{href:"https://developer.harmonyos.com/cn/develop/deveco-studio#download_cli",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击链接获取"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("2、解压文件后，我将其放到我 sdk 文件同目录下，如我的 sdk 存放路径为 / Users/jiangfeng/Library/Huawei/Sdk"),e("br"),s._v(" "),e("img",{attrs:{src:"https://s3.bmp.ovh/imgs/2023/10/09/32928bc6f764636a.png",alt:""}})]),s._v(" "),e("p",[s._v("3、配置环境变量，在 PATH 路径下添加 HDC 工具路径和添加 HDC_SERVER_PORT 端口信息，在.bash_profile 文件中增加如下配置并保存：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export PATH=$PATH:/Users/jiangfeng/Library/Huawei/command-line-tools/ohpm/bin\nexport PATH=$PATH:/Users/jiangfeng/Library/Huawei/Sdk/hmscore/3.1.0/toolchains\nexport CLASSPATH\nHDC_SERVER_PORT=7035\nlaunchctl setenv HDC_SERVER_PORT $HDC_SERVER_PORT\nexport HDC_SERVER_PORT\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("4、执行以下命令，使用配置的环境变量生效。")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("source "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bash_profile\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或者 source /Users/jiangfeng/.bash_profile")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("5、找到刚存放的 ohpm 工具包，进入 ohpm/bin 目录，双击 init，下图第一个"),e("br"),s._v(" "),e("img",{attrs:{src:"https://s3.bmp.ovh/imgs/2023/10/09/dbd52cbc203d01c9.png",alt:""}})]),s._v(" "),e("p",[s._v("6、然后在命令窗口中查看环境变量，")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("echo $PATH\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果出现有刚配置的内容，则继续执行 ohpm 命令，如果有如下内容，说明配置成功"),e("br"),s._v(" "),e("img",{attrs:{src:"https://s3.bmp.ovh/imgs/2023/10/09/7da5aed210ed3e35.png",alt:""}})]),s._v(" "),e("p",[s._v("至此，满心欢喜的以为成功了，然而并没有，当我新开窗口后，执行 ohpm，发现找不到 ohpm，原因是我用的 zsh，因此需要在.zshrc 配置文件中增加如下配置，并保存")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export PATH=/Users/jiangfeng/Library/Huawei/command-line-tools/ohpm/bin:$PATH\nexport PATH=/Users/jiangfeng/Library/Huawei/Sdk/hmscore/3.1.0/toolchains:$PATH\nexport CLASSPATH\nHDC_SERVER_PORT=7035\nlaunchctl setenv HDC_SERVER_PORT $HDC_SERVER_PORT\nexport HDC_SERVER_PORT\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("然后在命令窗口中执行 source ~/.zshrc 查看刚配置的环境变量是否成功，如果成功了，此时可以新开一个命令窗口，然后执行 ohpm，发现是可以的。")]),s._v(" "),e("p",[s._v("如果 DevEco Studio 中执行 ohpm 报查找不到命令错误，则关闭命令窗口标签页重新开一个或者关闭并重启 DevEco Studio 后就可以了")])])}),[],!1,null,null,null);e.default=t.exports}}]);