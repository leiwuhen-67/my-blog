(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{411:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"一、混入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、混入"}},[s._v("#")]),s._v(" 一、混入")]),s._v(" "),n("p",[s._v("混入：分为类混入和函数混入。类混入是将若干个类在另一个 {} 中使用 () 调用，使被调用的类的属性代码在新的类中生成。")]),s._v(" "),n("h4",{attrs:{id:"_1、类混入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、类混入"}},[s._v("#")]),s._v(" 1、类混入"),n("br")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".left {\n  text-align: left;\n}\n.txtColor: {\n  color: #eee;\n}\n.box {\n  .left();\n  .txtColor();\n}\n\n// 上面less代码编译成css代码后如下：\n.left {\n  text-align: left;\n}\n.txtColor: {\n  color: #eee;\n}\n.box {\n\ttext-align: left;\n\tcolor: #eee;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("可以看出类混入定义的类会被编译到 css 代码中，造成代码冗余。")]),s._v(" "),n("h4",{attrs:{id:"_2、函数混入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、函数混入"}},[s._v("#")]),s._v(" 2、函数混入"),n("br")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".函数名(){};\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("使用时将类定义到函数中，在另一个类中使用时，直接调用函数即可，但是不会在 css 代码中生成类，函数里可以传入参数，定义了参数后就必须传入参数，否则报错，可传默认参数，就是在形参变量后加冒号，冒号后面的值即为默认值。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@left: left;\n@right: right;\n.txtLeft (@pos: left) {\n  text-align: @pos;\n}\n.txtColor () {\n  color: #eee;\n}\n.box {\n  .txtLeft(@right);\n  .txtColor()\n}\n\n// 上面代码编译后生成css代码如下：\n.box {\n  text-align: right;\n  color: #eee;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("ps：混入函数定义中 {} 里面可以继续定义类，使用到函数里具体的某个类时，直接通过函数名加类名的方式 (调用时函数名后不能加括号)。如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".txtStyle() {\n  .color {\n      color: #eee;\n  }\n  .size {\n      font-size: 18px;\n  }\n}\n.box {\n  .txtStyle.size;\n}\n\n// 编译后的css代码如下：\n.box {\n  font-size: 18px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"二、映射-在函数中定义key和value键值对"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、映射-在函数中定义key和value键值对"}},[s._v("#")]),s._v(" 二、映射：在函数中定义 key 和 value 键值对")]),s._v(" "),n("p",[s._v("使用时，通过 [] 加键拿到具体的 value。如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".txtStyle () {\n  color: #eee;\n  size: 25px;\n}\n.box {\n  color: .txtStyle[color];\n  font-size: .txtStyle[size]\n}\n\n// 编译后的css代码如下\n.box {\n  color: #eee;\n  font-size: 25px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("ps：定义键值对时，value 值不能加引号，调用时方法名不能加括号，[] 中的 key 不能加引号。"),n("br")]),s._v(" "),n("h3",{attrs:{id:"三、运算"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、运算"}},[s._v("#")]),s._v(" 三、运算")]),s._v(" "),n("p",[s._v("运算：可进行加减乘除等操作。任何的数字、颜色、变量等都可以参与运算。运算符左右两边须用空格隔开，如果两个变量中只有一个变量有单位或两个变量的单位相同时，则结果的单位就与有单位的那个变量相同。如果两个变量都有单位时，以前面变量为结果的单位。"),n("br"),n("br"),s._v("\ncalc ()：使用 calc 后，将不再对数学表达式进行计算，但是在嵌套函数中会计算变量和数学公式的值。如:"),n("br")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@num: 20px / 2;\n@num2: calc(50px / 2);\n.calcWrapper {\n  width: calc(50% + (@num - 3px));\n  height: @num2;\n}\n\n// 编译后的css代码如下：\n.calcWrapper {\n  width: calc(50% + (10px - 3px));\n  height: calc(50px / 2);\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"四、扩展-extend"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、扩展-extend"}},[s._v("#")]),s._v(" 四、扩展（:extend）")]),s._v(" "),n("p",[s._v("在一个选择其中扩展其他选择器的样式。如："),n("br")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("h3 {\n  &:extend(.span);\n  font-size: 18px;\n}\n.span {\n  color: #eee;\n}\n\n// 编译后的css代码如下\nh3 {\n  font-size: 18px;\n}\n.span,\nh3 {\n  color: #eee;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v(":extend () 中可包含多个类，如:"),n("br")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("h3 {\n  &:extend(.span, .opa);\n  background: #666;\n}\n.span {\n  font-size: 18px;\n}\n.opa {\n  opacity: 0.8;\n}\n\n// 编译后的css代码如下：\nh3 {\n  background: #666;\n}\n.span, h3 {\n  font-size: 18px;\n}\n.opa, h3 {\n  opacity: 0.8;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"五、循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、循环"}},[s._v("#")]),s._v(" 五、循环")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@arr: red, green, blue, orange;\n@len: length(@arr);\n.cont(@count) when (@count <= @len) {\n  .list@{count} {\n    color: extract(@arr, @count)\n  }\n  .cont(@count + 1)\n}\n.cont(0);\n\n// 编译结果如下：\n.list1 {\n  color: red;\n}\n.list2 {\n  color: green;\n}\n.list3 {\n  color: blue;\n}\n.list4 {\n  color: orange;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"六、extract函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、extract函数"}},[s._v("#")]),s._v(" 六、extract 函数")]),s._v(" "),n("p",[s._v("用法：extract (list, index)"),n("br"),s._v("\n list 是一个值列表，值之间可用逗号或空格隔开。"),n("br"),n("br"),s._v("\nindex 是一个整数，指定要返回的列表元素的位置。")]),s._v(" "),n("h3",{attrs:{id:"七、range函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七、range函数"}},[s._v("#")]),s._v(" 七、range 函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/*\n  start：起始值，可选。\n  end：最终值。\n  step：要增加的数量，可选\n*/\n用法：range(start, end, step)\n\nrange(4);                //1 2 3 4\nrange(10px, 40px, 10);   // 10px 20px 30px 40px\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"八、each函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#八、each函数"}},[s._v("#")]),s._v(" 八、each 函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/*\neach遍历集合值，value指当前值，index指当前索引。\n*/\n@list: red, green, blue;\neach(@list, {\n  .box@{index} {\n      background: @value;\n  }\n})\n\n// 编译后的css代码如下：\n.box1 {\n  background: red;\n}\n.box2 {\n  background: green;\n}\n.box3 {\n  background: blue;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"九、if函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#九、if函数"}},[s._v("#")]),s._v(" 九、if 函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/*\n  有3个参数，\n  第一个参数是一个布尔表达式，\n  第二个参数表示第一个参数为真时返回的值，\n  第三个参数表示第一个参数为假时返回的值\n*/\n@w: 50px;\n@h: 50px;\n@num: 5;\n.box {\n  width: if(@val > 10, @w, calc(@w/2));\n  height: if(@val > 10, @h, calc(@h/2));\n}\n\n// 编译后的css代码如下：\n.box {\n  width: 25px;\n  height: 25px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h3",{attrs:{id:"十、获取图片的宽高"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十、获取图片的宽高"}},[s._v("#")]),s._v(" 十、获取图片的宽高")]),s._v(" "),n("p",[s._v("图片的宽度：image-width (imgUrl)"),n("br"),n("br"),s._v("\n图片的高度：image-height (imgUrl)")])])}),[],!1,null,null,null);n.default=t.exports}}]);