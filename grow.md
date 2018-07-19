# 初中级前端工程师成长路径(初稿)


### 1. 了解前端

了解前端，包括但不限于以下内容。

- 前端技能能做什么
- 需要学习哪些技术，背景知识要求。
- 前端工程师的工作内容
- 发展前景，薪资水平
- 业内高手，收藏他们的blog
- 最快能多快成为高手，投入时间如何
- 收藏常用前端资讯和参考网站，微信中添加几个优秀的前端公众号

你需要将搜索到的资源整理到Evernote或有道云笔记中。

**技能**

- 搜索技巧
- 笔记

**资源**

- https://github.com/helijia-web/micro_conf/issues/193
- https://www.jianshu.com/p/e41bf24ad830


### 2. 准备工作

工欲善其事必先利其器

在学习之前，必须先把电脑整整，装软件、学工具、做笔记。

- 有条件就用Mac，没条件最迟要在入门后进阶前切换到Linux/Mac。
- 安装软件：
  - window需要安装gitbash
  - Chrome: 之后就使用Chome浏览网站。
  - NodeJS
- 科学上网， 你一定要解决这个问题（可花钱直接买现成服务，这个钱值得花），之后坚持用google搜索。  
  如果暂时没有解决， 那就采用bing来搜索需要的内容。  
- 掌握一个编辑器：如果没有偏好，可以选择 vscode、sublime或ATOM之一。  
  建议可以三个都下载过来，捣鼓一翻再做选择。  
  花一到两小时把所有功能点一遍。（这对于你未来的效率有极大的帮助，节省生命）。  
  后面学习过程中，每过一段时间就查找资源，看看能否更好地使用编辑器，提高效率。  
- 命令行： 至少掌握文件/目录操作  
  window下安装gitbash  
  Mac下需要安装iterm和zshell  
  喜欢看书学习的，可以看[《鸟哥的Linux私房菜》](https://book.douban.com/subject/4889838/)第六章和第七章(6.1~7.3节)。  
  **一定要练习， 否则永远学不会**
- 学习markdown语法  
- 注册github帐号  
  - 利用github pages创建一个blog站点。
  - 可以将上一课和这一课的学习笔记和资料发在这个blog站点上。（放心，没有人看的）

**技能**

- 编辑器
- Linux命令
- markdown
- github入门


### 3. HTML入门

- 创建和浏览第一个网页
  - 认识HTML
  - 使用编辑器创建网页文件
  - 安装和使用[http-server](https://github.com/indexzero/http-server#readme)来配合开发网页
  - 使用Chrome浏览网页
- 学习HTML基础
  - 从实例入门，做一个有图文有链接的文章页面。
  - 学习HTML结构和常用标签
  - 喜欢看书的，推荐《Head First HTML与CSS》(https://book.douban.com/subject/25752357/)
- 查文档
  - [MDN](https://developer.mozilla.org/) 这个是前端（HTML/CSS）的官方文档
  - 从文档中查到所学到的标签
  - 在实例中尝试书中没有标签或属性
  - 你需要简单过一下[所有标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)，对HTML的整体有个印象。
- 【查资料】什么是HTML5，历史等。
- 【查资料】网页是怎么出来的，认识以下概念
  URL、域名、HTTP、状态码、DNS等。
  - [从URL到页面加载](https://segmentfault.com/a/1190000006879700)， 你需要自行查一两个其他相关资源进行扩展。


### 4. CSS入门

学习方法： 做一个有样式的文章内容页。

- 引入样式
 - 使用颜色、文字相关的样式，背景等。
- 使用更多的HTML标签，开始关注语义化
  - 主要掌握ul, li的使用
- 使用选择器
  - 先掌握class选择器
  - 先掌握后代和子代选择器
  - 链接的状态（伪类选择器）
- 学习Chrome开发者工具调试样式
- 学习cssreset，认识浏览的默认样式
- 查文档， 尝试在MDN中查询学到的CSS属性。
- 【查资料】什么是CSS3，有哪些特性等
  - 尝试在MDN中查到相关文档，然后在自己的示例中尝试

  
### 5. CSS布局

这一节是区分业余前端和专业前端的分隔线。。。。

学习的方法是仿一个较简单但布局清晰的站，比如豆瓣等。

可以先学具体的技术点，学习过程中一定要亲自在实例中验证，一定要借助真实呈现的效果去帮助理解。  
可以在[codepen](https://codepen.io/pen/)中练习。 不要图快而只看书不练习。

- 盒模型
- 浮动布局
  - 掌握常用的布局套路
  - 复杂的布局只是简单布局的组合和嵌套
- 绝对定位
  - absolute/relative，弄清楚定位的相对关系
  - fixed
  - sticky, 这个效果可usth
- 图标
  - 背景图制作图标
  - css sprites
- 使用一个css库
  - 比如[bootstrap](https://getbootstrap.com/)或[semantic-ui](https://semantic-ui.com/)

  
对于入门HTML、CSS《HeadFirst HTML/CSS》这本书足够了，但对于CSS的知识这本书还不够体系化，  
所以我推荐另一本书 [《精通CSS》](https://book.douban.com/subject/4736167/)来搭配完成CSS的有效学习。   
但这本书是比较早写成的（相对于日新月薪的前端来说），内容较现在来说有点过时，所以看的过程中可以直接忽略IE兼容性相关的内容。  

如果没时间，可以主要看以下章节的内容，因为以下章节的内容有依赖，成体系，网上的资料比较零碎，看起来效果不好。

- 第2章，选择器
- 第3章，盒模型
- 第8章，浮动布局


### 6. CSS进阶

学习方法

1. 仿一个较复杂的综合性网站首页，比如淘宝网首页，京东首页等。 
2. 仿一个移动端的较复杂的H5页面。

- 使用less/scss等CSS预编译技术  
  可能需要搭配gulp来帮助开发
- flex布局  
  目前主流的布局方式，直接看ruanyifeng的[flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)来学习。 
- 移动端的适配
  动态REM
  media query
- 图标
  - iconfont和svg图标
  - 使用工具网站[iconfont](http://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.1.pCxKlU)
- 装饰  
  背景，圆角，边框，阴影，每个都尝试一下。
- 过渡和动画
- 收藏[张鑫旭的blog](https://www.zhangxinxu.com/wordpress/category/css/), 无聊了就看一篇CSS的文章。


## 学习方法

- 学习需要整块时间，所以至少以半个小时为单位来安排
- 技能的学习需要刻意练习，练习就是真的动手去做，不要认为看了书感觉明白了就跳过，这样是掌握不了技能的


## 未完待续。。。
