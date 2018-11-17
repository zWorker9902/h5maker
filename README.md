1、布局

	1) flex布局

	flex: 采用flex布局的元素，称为flex容器，子元素自动成为容器成员，成为flex项目

	水平的主轴，垂直的交叉轴

	// 设置为flex布局之后，自元素的float，clear，vertical-align属性将失效
	display: flex;
	display: inline-flex;

	容器（父元素）属性：
	  a、主轴的方向：
	  flex-direction: row | row-reverse | column | column-reverse;

	  b、换行方式
	  flex-wrap: nowrap | wrap | wrap-reverse;

	  flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap

	  c、项目（子元素）在主轴上的对齐方式
	   justify-content: flex-start | flex-end | center | space-between | space-around;

	   space-around 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

	   d、项目（子元素）在交叉轴上的对齐方式
	   align-items: flex-start | flex-end | center | baseline | stretch;

	   baseline: 项目的第一行文字的基线对齐（即第一行文字的底边对齐）。
	   stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

	项目（子元素）属性：
		a、固定大小
		flex-basis: <length> | auto;
		它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间

		b、综合
		flex属性是flex-grow（放大比例）, flex-shrink（缩小比例） 和 flex-basis（固定大小）的简写，默认值为0 1 auto。后两个属性可选。

		c、自定义对齐方式
		a、align-self属性
		align-self: auto | flex-start | flex-end | center | baseline | stretch;
		align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch

	2）table布局
	display: table;
	display: inline-table;
	元素作为表格显示

	display：table解决了避免使用表格的问题，但有几个需要注意的：

（1）display: table时padding会失效
（2）display: table-row时margin、padding同时失效
（3）display: table-cell时margin会失效

2、Sticky footers 三种实现方式
  1）、为内容区域添加最小的高度
   采用vh和calc方法
   .content {
   		min-height: calc(100vh - footer高度)
   }

  2）、使用flex布局
   .box {
  	  display: flex;
  	  // flex-flow: flex-direction felx-wrap
  	  flex-flow: column;
  	  min-height: 100vh;
   }
   .content {
     flex: 1;
   }
   .footer {
	  flex: 0 0 58px;
	}

   3)、使用margin
   .wrapper {
   		min-height: 100%;
   }
   .footer {
   		height: 50px;
   		margin-top: -50px;
   }

2、loaders
1)、vue-loader 用来把vue组件转换成可部署的js,html,css模块

在webpack中，所有预处理器都要匹配相应的loader,vue-loader允许其他的webpack-loader处理组件中的一部分编码，然后它根据
lang属性自动判断出要使用的loaders。所以，其实只要安装处理sass/scss的loader。就能在vue中使用scss了。

4、vue-resource


5、处于性能考虑 尽量使用class，不要使用标签style

6、better-scroll

7、Vue动画 transition

8、webpack dev-server webpack-hot-middle实现热加载的区别
