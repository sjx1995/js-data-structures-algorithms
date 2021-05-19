(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{518:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"计算器-面试题16-26"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算器-面试题16-26"}},[t._v("#")]),t._v(" 计算器（面试题16.26）")]),t._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。")]),t._v(" "),a("p",[t._v("表达式仅包含"),a("code",[t._v("非负整数")]),t._v("，"),a("code",[t._v("+")]),t._v("， "),a("code",[t._v("-")]),t._v(" ，"),a("code",[t._v("*")]),t._v("，"),a("code",[t._v("/")]),t._v(" 四种运算符和空格"),a("code"),t._v(" 。 整数除法仅保留整数部分。")]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("输入: "),a("code",[t._v('"3+2*2"')]),t._v("\n输出: "),a("code",[t._v("7")])]),t._v(" "),a("p",[t._v("输入: "),a("code",[t._v('" 3/2 "')]),t._v("\n输出: "),a("code",[t._v("1")])]),t._v(" "),a("p",[t._v("输入: "),a("code",[t._v('" 3+5 / 2 "')]),t._v("\n输出: "),a("code",[t._v("5")])]),t._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("ul",[a("li",[t._v("你可以假设所给定的表达式都是有效的。")]),t._v(" "),a("li",[t._v("请不要使用内置的库函数 eval。")])]),t._v(" "),a("h2",{attrs:{id:"算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("dig")]),t._v("保存上一个符号，使用"),a("code",[t._v("cur")]),t._v("保存当前的数字，使用"),a("code",[t._v("stack")]),t._v("来保存暂时的结果")]),t._v(" "),a("ul",[a("li",[t._v("遍历字符串\n"),a("ul",[a("li",[t._v("如果遇到空格"),a("code",[t._v('" "')]),t._v("，跳过")]),t._v(" "),a("li",[t._v("如果遇到数字，拼接在"),a("code",[t._v("cur")]),t._v("后面")]),t._v(" "),a("li",[t._v("如果遇到标点，则：\n"),a("ul",[a("li",[t._v("是加号"),a("code",[t._v("+")]),t._v("，则将"),a("code",[t._v("cur")]),t._v("转换为数字后推入"),a("code",[t._v("stack")])]),t._v(" "),a("li",[t._v("是减号"),a("code",[t._v("-")]),t._v("，则将"),a("code",[t._v("cur")]),t._v("转换为负数后推入"),a("code",[t._v("stack")])]),t._v(" "),a("li",[t._v("是乘号"),a("code",[t._v("*")]),t._v("，则将"),a("code",[t._v("stack")]),t._v("中最后一项弹出，和"),a("code",[t._v("cur")]),t._v("转换数字后相乘，推入"),a("code",[t._v("stack")])]),t._v(" "),a("li",[t._v("是除号"),a("code",[t._v("/")]),t._v("，则将"),a("code",[t._v("stack")]),t._v("中最后一项弹出，和"),a("code",[t._v("cur")]),t._v("转换数字后相除，推入"),a("code",[t._v("stack")])])])])])]),t._v(" "),a("li",[t._v("将"),a("code",[t._v("cur")]),t._v("重置为空字符串"),a("code",[t._v('" "')]),t._v("，用来保存下一个数字")]),t._v(" "),a("li",[t._v("将当前的符号保存在"),a("code",[t._v("dig")]),t._v("中，供下一个数字做判断")]),t._v(" "),a("li",[t._v("最后将"),a("code",[t._v("stack")]),t._v("中所有项相加得到的结果就是所求")])]),t._v(" "),a("p",[t._v("因为运算先后顺序，"),a("code",[t._v("*")]),t._v("、"),a("code",[t._v("/")]),t._v("先做运算，所以我们在上一个符号是"),a("code",[t._v("乘除")]),t._v("时（因为我们没遇到一个符号时，说明这个数字结束了，当前数字运算要看前一个符号和前一个数字），将上一个数字从栈中拿出做运算，并将结果推入栈；如果上一个符号是"),a("code",[t._v("减号")]),t._v("，则将数字取反推入栈，因为我们结果是要对栈中所有数字求和得结果，所以减去一个数转换成加这个数的负数；如果上一个符号是"),a("code",[t._v("加号")]),t._v("，则直接推入栈中即可")]),t._v(" "),a("p",[t._v("我们遍历的时候要遍历到"),a("code",[t._v("s[s.length]")]),t._v("的位置，这是为了将最后一个数字能推入栈中")]),t._v(" "),a("p",[t._v("最后栈中保存的是"),a("code",[t._v("需要加的数")]),t._v("、"),a("code",[t._v("需要减去的数的相反数")]),t._v("、"),a("code",[t._v("乘除法运算后的结果")]),t._v("，我们将这些值加起来就能得到结果了")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("calculate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tcur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tcur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tcur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tdig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("acc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);