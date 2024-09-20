---
slug: mathcat-intro
title: 数学猫（MathCAT）背后的故事 —— MathCAT 开发简史与作者简介
authors: [nsoiffer, inky]
tags: []
---

译注：本文大部分内容翻译自 [MathCAT 的首页][1]，翻译以意译为主，故意跳过了过于技术的部分。
主要关注：什么是 MathCAT？以及 MathCAT 相关的一些历史背景。

<!-- truncate -->

## 简介

MathCAT 可以拆分为 Math 和 CAT 直译为“数学猫”。其中 CAT 为全大写的三个字母，实际上是三个单词的首字母缩写。
MathCAT 的全称是 Math Capable Assistive Technology，直译为数学辅助技术。

一句话介绍 MathCAT：用于生成语音、盲文和数学导航的数学辅助技术。

MathCAT 的目标是成为一个易于使用的屏幕阅读器库，用于从 MathML 生成高质量的语音和盲文。它是 MathPlayer 的后续项目，并吸取了先前的经验教训以获得更高质量的输出。
MathCAT 利用了 MathML 工作组正在开发的一些新想法，允许公式编写者在使用符号时能更准确的表达他们的意图。例如，`(3, 6)`，如果没有额外的说明，可能代表平面上的一个点、一个开区间、甚至是最大公约数的速记符号。当公式编写者使用 MathML 清楚地表达了他的意图时，MathCAT 可以利用这些信息以生成更自然的输出。


## MathCAT 开发简史

> 译注：下文中的“我”均指代原作者 Neil Soiffer。

MathCAT 是 MathPlayer 的后续产品。早在 2004 年加入设计科学（Design Science）后，我在设计科学部门为 MathPlayer 增加了可访问性。当时 MathPlayer 主要被设计为 IE (Internet Explorer) 的 C++ 插件，用于在网页上显示 MathML。在很长的一段时间里，它是最完整的 MathML 实现。数学显示的原始工作是由设计科学的创始人 Paul Topping 和他们的首席技术官，已故的 Robert Miner 完成的。最终，由于多种原因，IE 撤回了 MathPlayer 用于数学显示所依赖的的编程接口，并且没有给出替代品。因为世界正在转向在浏览器中使用 JavaScript 并且禁止执行有风险的外部代码。这使得 MathPlayer 成为其他程序（主要是 NVDA）调用的、仅用于可访问性支持的库。MathPlayer 是专有的，但免费赠送。

2016年，我离开了设计科学。2017年，WIRIS 收购了设计科学。我自愿向 MathPlayer 免费添加错误修复，最初他们对此表示支持。但是当需要发布时，收购时相关的一些人已经离开了，剩下的团队对支持 MathPlayer 不感兴趣。该决定直到2020年底才最终确定。2021 年，我开始研究 MathPlayer 的替代品。作为一个挑战，我决定学习 Rust 并在 Rust 中进行实现。对于那些不熟悉 Rust 的人来说，它是一种低级语言，是类型安全和内存安全的，但不会自动进行垃圾回收或引用计数。它经常被吹捧为 C/C++ 更安全的替代品。

Rust 非常高效。在酷睿 i7-770K 机器（大约 2017 年的高端处理器）上，中等大小表达式大约需要 4 毫秒。耗时大致可以划分为：清理 MathML 2 毫秒 + 语音生成 1 毫秒 + 盲文生成 1 毫秒。

## 关于 MathCAT 的作者

> 译自 [About me][2] 一节

从 2002 年开始，我一直在研究数学可访问性。当时，我在开发 Mathematica 的所见即所得数学编辑器。15 年前失明的 John Gardner 教授问我是否可以让 Mathematica 的界面变得可访问。我可能完成了 80% 的工作，但公司对这一点不感兴趣，最终我离开了公司，公司则删除了代码。那是我无障碍之旅的开始：**向前一步，后退一步，然后再次前进**，因为让每个人都有机会找到数学与科学的乐趣赋予了我生命的意义。

然后，我加入了设计科学公司（Design Science Inc., DSI），公司对让数学变得可访问抱有兴趣。当时，DSI 刚开发了 MathPlayer，这是一个显示MathML 的 IE6 插件。在公司的支持下，我申请并获得了美国国家科学基金的资助，以使 MathPlayer 变得可访问。这项工作非常成功，在随后的几年里，我继续为其添加功能。好景不长，IE 出于安全原因删除了 MathPlayer 所依赖的接口。这或许就是 IE 的致命伤... 在那之后，MathPlayer 变成了一个 NVDA 插件。通过 IES 的赠款与 ETS 的进一步工作，我们完善了 MathPlayer 的功能，同时从赠款资助的用户研究中获得了宝贵的见解。

我一直在努力让数学在网络上工作并使其易于访问。在 Wolfram Research 工作期间，我帮助启动了 W3C MathML 工作，并从那时起就参与了工作组的工作。我目前担任 W3C 数学工作组主席。多年来，我一直是其他几个委员会的成员，大力推动并确保他们将数学可访问性纳入他们的标准。其中一些组包括 NIMAS，EPUB 和 PDF/UA。

我很荣幸，2023 年美国全国盲人联合会给了我 $25,000 美元的雅各布·博洛廷奖。部分原因是我在 MathCAT 上的工作。我计划把大部分钱给那些帮助 MathCAT 的盲人程序员。**MathCAT 不仅应该为盲人群体服务，还应该由盲人群体来开发。**

## 专有名词

- 所见即所得：WYSIWYG, What You See Is What You Get。类似 Word 等编辑后有及时反馈的形式，而不是类似 markdown 等需要将文本与显示拆分开的形式
- MathML：一种用于结构化表示数学公式的标记语言，类似 XML/HTML
- Mathematica：商业数学软件，常用于符号计算以及数值计算
- Wolfram Research：Mathematica 的开发公司
- W3C: World Wide Web Consortium，万维网联盟，又称 W3C 理事会，是万维网的主要国际标准组织，制定了许多网络相关的标准与规范

## 译注

- 对应 Github 上文档的原始 markdown 文件: [NSoiffer/MathCAT:docs/index.md][3]
- 略过了技术相关的："Documentation for different MathCAT Users"、"Some Technical Details"、"Current Status" 几小节
- 译文原载于：NVDA 中文社区，[数学猫（MathCAT）背后的故事——MathCAT 开发简史与作者简介 - NVDA 中文站](https://nvdacn.com/index.php/archives/1280/)

[1]: https://nsoiffer.github.io/MathCAT/
[2]: https://nsoiffer.github.io/MathCAT#about-me
[3]: https://github.com/NSoiffer/MathCAT/blob/e29f6a9dd49c5472d3b34f9084e3d741a7e106cf/docs/index.md
