(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{449:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"链表的中间结点-876"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链表的中间结点-876"}},[s._v("#")]),s._v(" 链表的中间结点（876）")]),s._v(" "),a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),a("p",[s._v("给定一个头结点为 head 的非空单链表，返回链表的中间结点。")]),s._v(" "),a("p",[s._v("如果有两个中间结点，则返回第二个中间结点。")]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("输入："),a("code",[s._v("[1,2,3,4,5]")]),s._v("\n输出：此列表中的结点 "),a("code",[s._v("3")]),s._v(" (序列化形式："),a("code",[s._v("[3,4,5]")]),s._v(")")]),s._v(" "),a("p",[s._v("输入："),a("code",[s._v("[1,2,3,4,5,6]")]),s._v("\n输出：此列表中的结点 "),a("code",[s._v("4")]),s._v(" (序列化形式："),a("code",[s._v("[4,5,6]")]),s._v(")")]),s._v(" "),a("h2",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示")]),s._v(" "),a("p",[s._v("给定链表的结点数介于 1 和 100 之间。")]),s._v(" "),a("h2",{attrs:{id:"算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[s._v("#")]),s._v(" 算法")]),s._v(" "),a("h3",{attrs:{id:"两次遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两次遍历"}},[s._v("#")]),s._v(" 两次遍历")]),s._v(" "),a("p",[s._v("第一次遍历链表，统计链表长度")]),s._v(" "),a("p",[s._v("第二次找到中间结点并返回")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("middleNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tcount"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\tcount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\thead "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"快慢指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快慢指针"}},[s._v("#")]),s._v(" 快慢指针")]),s._v(" "),a("p",[s._v("两个指向head的指针，快指针走两步，慢指针走一步。快指针走到终点时，慢指针恰好是一半的位置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("middleNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\tslow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tslow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tfast "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);