(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{471:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pow-x-n-50"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pow-x-n-50"}},[t._v("#")]),t._v(" Pow(x, n)（50）")]),t._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("实现 pow(x, n) ，即计算 x 的 n 次幂函数。")]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("输入: "),a("code",[t._v("2.00000")]),t._v(", "),a("code",[t._v("10")]),t._v("\n输出: "),a("code",[t._v("1024.00000")])]),t._v(" "),a("p",[t._v("输入: "),a("code",[t._v("2.10000")]),t._v(", "),a("code",[t._v("3")]),t._v("\n输出: "),a("code",[t._v("9.26100")])]),t._v(" "),a("p",[t._v("输入: "),a("code",[t._v("2.00000")]),t._v(", "),a("code",[t._v("-2")]),t._v("\n输出: "),a("code",[t._v("0.25000")])]),t._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("ul",[a("li",[t._v("-100.0 < x < 100.0")]),t._v(" "),a("li",[t._v("n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。")])]),t._v(" "),a("h2",{attrs:{id:"算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),a("h3",{attrs:{id:"快速幂算法-递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速幂算法-递归"}},[t._v("#")]),t._v(" 快速幂算法（递归）")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("分治算法")]),t._v("的思想，例如求"),a("code",[t._v("x^64")]),t._v("时，我们不需要将"),a("code",[t._v("x")]),t._v("连乘"),a("strong",[t._v("64次")]),t._v("，而是"),a("code",[t._v("x -> x^2 -> x^4 -> x^8 -> x^16 -> x^32 -> x^64")]),t._v("每次对上次的结果平方，这样计算"),a("strong",[t._v("6次")]),t._v("就得到了结果")]),t._v(" "),a("p",[t._v("如果最后要求的是"),a("code",[t._v("x^77")]),t._v("时，我们可以将其转化为"),a("code",[t._v("x -> x^2 -> x^4 -> x^9 -> x^19 -> x^38 -> x^77")]),t._v("，我们可以在其中某一项平方后再乘"),a("code",[t._v("x")]),t._v("，比如"),a("code",[t._v("x^38 * x^38 * x === x^77")])]),t._v(" "),a("p",[t._v("如果我们倒推整个式子，将会更加容易判断是否需要"),a("code",[t._v("+1")]),t._v("，所以我们递归的时候也从后向前进行递归：")]),t._v(" "),a("ul",[a("li",[t._v("递归结束条件是当前的"),a("code",[t._v("n")]),t._v("为"),a("code",[t._v("0")]),t._v("时返回"),a("code",[t._v("1")])]),t._v(" "),a("li",[t._v("传入下一轮递归的是幂运算底数"),a("code",[t._v("x")]),t._v("和"),a("code",[t._v("指数/2")]),t._v("，"),a("code",[t._v("指数/2")]),t._v("作为下一轮判断是否需要"),a("code",[t._v("再乘x")]),t._v("并控制总迭代次数")]),t._v(" "),a("li",[t._v("每一轮返回结果根据当前的"),a("code",[t._v("n")]),t._v("能不能被"),a("code",[t._v("2")]),t._v("整除，决定返回上一轮的值是"),a("code",[t._v("平方")]),t._v("还是"),a("code",[t._v("平方乘x")])])]),t._v(" "),a("p",[t._v("再"),a("code",[t._v("myPow()")]),t._v("中调用递归函数"),a("code",[t._v("mul()")]),t._v("的时候，因为"),a("code",[t._v("n")]),t._v("可能为负，所以我们需要进行正负判断")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myPow_2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mul")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"快速幂算法-迭代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速幂算法-迭代"}},[t._v("#")]),t._v(" 快速幂算法（迭代）")]),t._v(" "),a("p",[t._v("以"),a("code",[t._v("pow(2, 77)")]),t._v("为例子，我们按照之前的分析可知"),a("code",[t._v("x -> x^2 -> x^4 -> x^9 -> x^19 -> x^38 -> x^77")]),t._v("，这个过程中"),a("code",[t._v("x^4 -> x^9")]),t._v("、"),a("code",[t._v("x^9 -> x^19")]),t._v("、"),a("code",[t._v("x^38 -> x^77")]),t._v("这三个过程需要"),a("code",[t._v("乘以额外的x")]),t._v("，其余的"),a("code",[t._v("x")]),t._v("都是第一步中的"),a("code",[t._v("x")]),t._v("不断平方后的结果")]),t._v(" "),a("ul",[a("li",[t._v("对于第一个"),a("code",[t._v("x")]),t._v("，我们经过了6次平方，这个"),a("code",[t._v("x")]),t._v("为结果贡献了"),a("code",[t._v("2^6")]),t._v("个"),a("code",[t._v("x")])]),t._v(" "),a("li",[t._v("对于"),a("code",[t._v("x^4 -> x^9")]),t._v("中，我们额外乘了一个"),a("code",[t._v("x")]),t._v("，这个"),a("code",[t._v("x")]),t._v("在之后的运算中被平方了3次，这个"),a("code",[t._v("x")]),t._v("为结果贡献了"),a("code",[t._v("2^3")]),t._v("个"),a("code",[t._v("x")])]),t._v(" "),a("li",[t._v("对于"),a("code",[t._v("x^9 -> x^19")]),t._v("中，我们额外乘了一个"),a("code",[t._v("x")]),t._v("，这个"),a("code",[t._v("x")]),t._v("在之后的运算中被平方了2次，这个"),a("code",[t._v("x")]),t._v("为结果贡献了"),a("code",[t._v("2^2")]),t._v("个"),a("code",[t._v("x")])]),t._v(" "),a("li",[t._v("对于"),a("code",[t._v("x^38 -> x^77")]),t._v("中，我们额外乘了一个"),a("code",[t._v("x")]),t._v("，这个"),a("code",[t._v("x")]),t._v("为结果贡献了"),a("code",[t._v("1")]),t._v("个"),a("code",[t._v("x")])])]),t._v(" "),a("p",[t._v("所以我们指数"),a("code",[t._v("77")]),t._v("就等于"),a("code",[t._v("2^6 + 2^3 + 2^2 + 2^0")]),t._v("，而这里的运算恰好可以转换为"),a("code",[t._v("(1001101)2")]),t._v("，即77的二进制表达，每一个加数对应二进制的一个"),a("code",[t._v("1")])]),t._v(" "),a("p",[t._v("所以我们将整数拆分成二进制的表达式，就可得迭代的规律：")]),t._v(" "),a("p",[a("code",[t._v("x^77 => x^64 * x^8 * x^4 * x^1 => x^(64 + 8 + 4 + 1) => x^(2^6 + 2^3 + 2^2 + 2^0)")])]),t._v(" "),a("p",[t._v("所以我们在迭代中不断地平方"),a("code",[t._v("x")]),t._v("，从右往左得遇到二进制位为"),a("code",[t._v("1")]),t._v("时，将累计的"),a("code",[t._v("x_contribute")]),t._v("乘入结果"),a("code",[t._v("ans")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myPow")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mul")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x_contribute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" x_contribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tx_contribute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" x_contribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);