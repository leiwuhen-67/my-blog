(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{461:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("以 Mac 为例：")]),s._v(" "),a("p",[s._v("1、安装 Redis")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("brew install redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、开启 redis 服务")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务端命令工具包，用于启动服务，非后台启动时，关闭当前终端窗口会自动关闭redis")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时如出现如下图所示的结果，则表明 Reids 已成功安装。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://s3.bmp.ovh/imgs/2023/12/12/7a875ca55f63e3bc.png",alt:""}})]),s._v(" "),a("p",[s._v("3、连接 Redis")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启命令行客户端，一般会使用专门的UI客户端")]),s._v("\n\nredis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli shutdown   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正常停止服务，此时不能再通过命令行客户端读取和设置数据了")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("4、查看 Redis 是否连接成功，通过 ping 命令，如出现下图所示，则表示连接成功。"),a("br"),s._v(" "),a("img",{attrs:{src:"https://s3.bmp.ovh/imgs/2023/12/13/2516bcf667df4782.png",alt:""}})]),s._v(" "),a("p",[s._v("至此，就可以通过该命令客户端操作数据了。")]),s._v(" "),a("p",[s._v("然而，工作中一般很少直接通过该命令客户端来操作数据，毕竟太繁琐了，都是通过 Redis 可视化管理工具来操作。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://getmedis.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis 官网"),a("OutboundLink")],1),s._v("，下载后，连接到 Redis 服务器，可连接本地的或远程的"),a("br"),s._v(" "),a("img",{attrs:{src:"https://s3.bmp.ovh/imgs/2023/12/12/49345af3152063d5.png",alt:""}})]),s._v(" "),a("p",[s._v("常用 redis 配置:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定端口启动")]),s._v("\nredis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7000")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置redis服务为守护模式---默认为no")]),s._v("\ndaemonize no \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置当前redis实例启动之后保存进程的id文件路径及名称")]),s._v("\npidfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis_6379"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// redis服务端口")]),s._v("\nport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前redis设置保护模式是否开启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("mode yes\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置允许当前访问redis实例的IP地址列表")]),s._v("\nbind "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置连接密码")]),s._v("\nrequirepass "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置redis实例中数据库的个数")]),s._v("\ndatabases "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置最大并发数")]),s._v("\nmaxclients\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置客户端与redis建立连接最大空闲时间")]),s._v("\ntimeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 已通过redis-cli进入命令客户端，通过以下命令退出命令客户端")]),s._v("\nexit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);