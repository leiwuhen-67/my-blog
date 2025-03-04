(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{403:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在项目中经常会遇到这种情况，由于时间紧急，自己本地先开发了，而后远程 git 上建立了新的仓库，这时候本地仓库需要与远程仓库关联起来，不然没法拉取和提交代码。")]),s._v(" "),a("p",[s._v("这里主要有这几个步骤：")]),s._v(" "),a("p",[s._v("1、本地仓库与远程仓库关联起来：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git remote add origin "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'远程仓库地址'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、关联远程分支：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("set"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("upstream"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("origin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("分支名称 master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、拉取远程仓库代码到本地：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git pull\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这时候可能会报如下错误："),a("br"),s._v(" "),a("img",{attrs:{src:"https://tva2.sinaimg.cn/large/e37a8833ly8h5j69hcztuj21d40h6446.jpg",alt:""}}),a("br"),s._v("\n解决方案：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("git pull origin master "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("unrelated"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("histories\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("至此，现在就可以愉快地执行 push 操作和 pull 操作")])])}),[],!1,null,null,null);a.default=r.exports}}]);