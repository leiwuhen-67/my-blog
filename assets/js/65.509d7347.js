(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{404:function(t,n,a){"use strict";a.r(n);var e=a(4),s=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("在 ArkTS 中，页面布局使用最多的两种容器组件是 Column 和 Row 容器。")]),t._v(" "),n("ul",[n("li",[t._v("Column 表示沿垂直方向布局的容器。")]),t._v(" "),n("li",[t._v("Row 表示沿水平方向布局的容器。")])]),t._v(" "),n("p",[t._v("在布局容器中，存在这两根轴，即主轴和交叉轴，这两个轴是互相垂直的。不同容器中主轴的方向不一样。")]),t._v(" "),n("ul",[n("li",[t._v("主轴：在 Column 容器中子组件是按照从上往下的垂直方向布局的，因此其主轴方向是垂直方向；在 Row 容器中的子组件是按照从左到右的水平方向布局的，因此其主轴方向是水平方向。"),n("br"),t._v(" "),n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093537.48240591728195865497013324924258:50001231000000:2800:E4A8703E974DA243A5B0DCF873B079356E3D086DD4C5E5F4F4C9996A24BFE213.png",alt:""}})]),t._v(" "),n("li",[t._v("交叉轴：与主轴垂直相交的轴线，如果主轴是垂直方向，则交叉轴是水平方向，如果主轴是水平方向，则交叉轴是垂直方向。"),n("br"),t._v(" "),n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093559.26315074948935028713786895385154:50001231000000:2800:E90C3798527690673C12FF03CE4E96ACB81061507E8E7E5D8D28345FDBABE982.png",alt:""}})])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性名称")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("justifyContent")]),t._v(" "),n("td",[t._v("设置子组件在主轴方向上的对齐格式")])]),t._v(" "),n("tr",[n("td",[t._v("alignItems")]),t._v(" "),n("td",[t._v("设置子组件在交叉轴方向上的对齐格式")])])])]),t._v(" "),n("h2",{attrs:{id:"_1、主轴方向的对齐-justifycontent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、主轴方向的对齐-justifycontent"}},[t._v("#")]),t._v(" 1、主轴方向的对齐（justifyContent）")]),t._v(" "),n("p",[t._v("子组件在主轴方向上的对齐方式使用 justifyContent 属性设置，其参数类型是 FlexAlign 。FlexAlign 定义了这几种类型："),n("br"),t._v("\nFlexAlign.Start、FlexAlign.Center、FlexAlign.End、FlexAlign.SpaceBetween、FlexAlign.SpaceAround、FlexAlign.SpaceEvenly。使用方式，如:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Row")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("justifyContent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlexAlign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Column")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("justifyContent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FlexAlign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("ul",[n("li",[t._v("Start：元素在主轴方向向首端对齐，如："),n("br"),t._v(" "),n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093635.32035979346581593610663677954018:50001231000000:2800:58C453ACE86CA1C302E54DCB5F3145723441C74D1DFF2EEBF7B139D6E451E043.png",alt:""}})]),t._v(" "),n("li",[t._v("Center：元素在主轴方向中心对齐，如："),n("br"),t._v(" "),n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093645.13836502941120958235196178607591:50001231000000:2800:BEFCB65EE28ADBECDCD2EBF137AC22FC706DBA80573F4CA6EA459E35E176D694.png",alt:""}})]),t._v(" "),n("li",[t._v("End：元素在主轴方向尾部对齐"),n("br"),t._v(" "),n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093656.11950985680580767370741882253952:50001231000000:2800:02E763488F548F20A9D42F0C4FF7134B53BF1CF7FB165D79B547C91C8AB349E7.png",alt:""}})]),t._v(" "),n("li",[t._v("SpaceBetween：元素在主轴方向均匀分配，相邻元素之间间距相等，第一个元素与行首对齐，最后一个元素与行尾对齐。"),n("br"),t._v(" "),n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093804.93104939200421838047247897835941:50001231000000:2800:D525D545DB808F6333A3219450C9275F407613C1234197F78DD26328AAA6E373.png",alt:""}})]),t._v(" "),n("li",[t._v("SpaceAround：元素在主轴方向均匀分配，相邻呀神农氏之间距离相同，第一个元素到行首的距离和最后一个元素到行尾的距离是相邻元素之间距离的一半。"),n("br"),t._v(" "),n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093815.19986383354077614672116616067784:50001231000000:2800:D788FBBD4F6D567DC0FBEC2A3AE457E0DB79321C62FB00996A4EBA1A666BCB5F.png",alt:""}})]),t._v(" "),n("li",[t._v("SpaceEvenly：元素在主轴方向间距相等，无论是相邻元素还是边界元素到容器的距离都是一样"),n("br"),t._v(" "),n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093832.55728706937371968766060845751313:50001231000000:2800:4E94B8AE046EEA376E2D4BB0E3ECBC9E10DFBB5A7DA2BEFB56ACA9C45C1962EB.png",alt:""}})])]),t._v(" "),n("h2",{attrs:{id:"_2、交叉轴方向的对齐-alignitems"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、交叉轴方向的对齐-alignitems"}},[t._v("#")]),t._v(" 2、交叉轴方向的对齐（alignItems）")]),t._v(" "),n("p",[t._v("子组件在交叉轴方向上的对齐方式使用 alignItems 属性来设置。")]),t._v(" "),n("ul",[n("li",[t._v("在 Column 容器中，交叉轴是水平方向，其参数类型为 HorizontalAlign（水平对齐），定义了这几种类型：HorizontalAlign.Start、HorizontalAlign.Center、HorizontalAlign.End。")])]),t._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Column")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alignItems")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HorizontalAlign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("ul",[n("li",[t._v("在 Row 容器中，交叉轴是垂直方向，其参数类型为 VerticalAlign（垂直对齐），定义了这几种类型：VerticalAlign.Top、VerticalAlign.Center、VerticalAlign.Bottom")])]),t._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Row")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alignItems")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VerticalAlign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"_1、column容器交叉轴"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、column容器交叉轴"}},[t._v("#")]),t._v(" 1、Column 容器交叉轴")]),t._v(" "),n("ul",[n("li",[t._v("Start：设置子组件在水平方向上按照起始端对齐。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093849.51680315686318997546945822776432:50001231000000:2800:E332039C0E147A0821BC8EE5728AF86D947C08CEB0493D3ECF00B586C55D5924.png",alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("Center（默认值）：设置子组件在水平方向上居中对齐")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093907.27150559513077056358280902343060:50001231000000:2800:94DE10796509F7218CBEBC89CDCA853BBED25828F7E752767DF572D3675DC14B.png",alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("End：设置子组件在水平方向上按照末端对齐")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093917.11787292337680687675606661042289:50001231000000:2800:3CA2A9162B59A8831B3D416022DAB6D9BA34A31A1E5E7A73F1E6B34B2BB77A8B.png",alt:""}})]),t._v(" "),n("h3",{attrs:{id:"_2、row容器交叉轴"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、row容器交叉轴"}},[t._v("#")]),t._v(" 2、Row 容器交叉轴")]),t._v(" "),n("ul",[n("li",[t._v("Top：设置子组件在垂直方向上居顶部对齐")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093936.32960965976524653940955831303584:50001231000000:2800:B1DAE174EBB68B6686345D0F30D244DB5B289D9A9685439AC83EB663852DA390.png",alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("Center（默认值）：设置子组件在竖直方向上居中对齐")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093945.97048801934552396962496383363605:50001231000000:2800:34159CA6F2B34267726492FF949A4682CAF882E9D542ABAEFDF4FED491FBAA11.png",alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("Bottom：设置子组件在竖直方向上居底部对齐")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230426093955.76095740531490057436654763735713:50001231000000:2800:3D577031F7B0AEBB0979E3B290B75028FF92964B23DAAA82594F4C73BA365746.png",alt:""}})])])}),[],!1,null,null,null);n.default=s.exports}}]);