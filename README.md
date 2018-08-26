# CSS盒子坍塌

> 盒子坍塌是什么？
本应该在父盒子内部的元素跑到了外部

> 为什么会出现盒子坍塌？
当父元素没设置足够大小的时候，而子元素设置了浮动的属性，子元素就会跳出父元素的边界（脱离文档流），尤其是当父元素的高度为auto时，而父元素中又没有其他非浮动的可见元素时，父盒子的高度就会直接坍塌为零，我们称这是CSS高度坍塌

举个栗子：

 .empty-div{
    margin-top: 20px;
    background: yellow;
  }
  .float-content{
    float: right;
  }

> 解决盒子坍塌的方法：

1）简单粗暴的方法就是直接将盒子大小写死，给每个盒子设定固定的width和height，直到合适为止，缺点就是非自适应，浏览器的窗口大小直接影响用户体验

关键代码：
  .empty-div{
    margin-top: 20px;
    background: yellow;
    height: 20px;
  }

2）给外部的父盒子也添加浮动，让其也脱离标准文档流

关键代码：
 .empty-div{
    float: right;
    margin-top: 20px;
    background: yellow;
  }

3）给父盒子添加overflow属性
        overflow:auto; 有可能出现滚动条，影响美观
        overflow:hidden; 可能会带来内容不可见的问题

关键代码：
  .empty-div{
    overflow: auto;
    margin-top: 20px;
    background: yellow;
  }

4）父盒子里最下方引入清除浮动块
        <br style="clear:both;"/>
        <div style="clear:both;"/>

关键代码：
  <div class="empty-div">
    <span class="float-content">测试内容</span>
    <!--<br style="clear:both;"/>-->
    <div style="clear:both;"/>
  </div>

5）after伪类清除浮动
        外部盒子的after伪元素设置clear属性，再隐藏它，不用引入冗余元素

关键代码：
  .empty-div{
    margin-top: 20px;
    background: yellow;
    &:after{
      clear: both;
      display: block;
      content: '';
      height: 0;
      width: 0;
      visibility: hidden;
    }
  }

demo代码：https://github.com/chendongdong/CSS-Demo/blob/master/src/components/CSSDemo1.vue

# 常见布局

1.流体布局：左右元素使用float，main设置左右margin

2.圣杯布局：main使用float+width:100%，
    左使用position:relative+float+left:负值+margin-left:负值；
    右使用position:relative+float+right:负值+margin-left:负值

3.双飞翼布局：content3设置float:left+width:100%，main3:左右设置margin,
    left3设置float:left+margin-left:-100%,right3设置float:right+margin-left:负值

demo代码: https://github.com/chendongdong/CSS-Demo/blob/dev/src/components/CSSDemo2.vue

# 居中方法

1.左边定宽，右边自适应方案：float + margin，float + calc

2.左右两边定宽，中间自适应：float，float + calc, 圣杯布局（设置BFC，margin负值法），flex

3.左右居中

行内元素: text-align: center

定宽块状元素: 左右 margin 值为 auto

不定宽块状元素: table布局，position + transform

4.上下垂直居中

定高：margin，line-height, position + margin(负值)

不定高：position + transform，flex，IFC + vertical-align:middle

垂直居中：
1.单行文本：使用height和line-height设置同一高度

2.postion+margin：设置父元素position:relative,子元素position:absolute;top:50%;margin-top:-50px;(子元素高度确定为100px)

3.postion+transform：设置父元素position:relative,子元素position:absolute;top:50%;transform:translateY(-50%);(子元素不确定高度)

4.position+margin auto：设置父元素position:relative,子元素position:absolute;top:0;bottom:0;margin:auto;height:50px;
line-height:50px;(关键：设置top=bottom，子元素要设置高度，除图片不用设置，自带高度)

5.百搭flex布局，用得最多，功能强大，灵活方便，设置父元素display:flex;align-item:center;

6.line-height+vertical-align;父元素设置line-height:100px;height:100px;子元素设置vertical-align:middle

7.dispaly table+vertical-align：父元素设置display:table;子元素设置display:table-cell;vertical-align:middle;
vertical-align属性只对拥有valign特性的html元素起作用，例如表格元素<td><th>等，而像<div><span>这样的元素时不行的

demo代码: https://github.com/chendongdong/CSS-Demo/blob/dev/src/components/CSSDemo3.vue

# 盒模型

盒模型：content（元素内容） + padding（内边距） + border（边框） + margin（外边距）

延伸： box-sizing

content-box：默认值，总宽度 = margin + border + padding + width

border-box：盒子宽度包含 padding 和 border，总宽度 = margin + width

inherit：从父元素继承 box-sizing 属性

标准模式：width与height指的是内容区域的宽高，增加padding、border、margin会影响总体尺寸

怪异模式：width与height指内容区+padding+border，增加padding、border不会影响总体尺寸

例如：width = 100px, border = 10px, padding: 10px
标准模式：总宽度 = width + border*2 + padding*2 = 140px

怪异模式：总宽度 = width = 100px = contentWidth + border*2 + padding*2   即 contentWidth=60px
当width小于border+padding的值时, contendWidth=0,盒子的宽度会被border和padding的宽度撑开

demo代码: https://github.com/chendongdong/CSS-Demo/blob/dev/src/components/CSSDemo4.vue

# 0.5px边框

// 左边的边框，关键属性left/right，transform:X轴偏移0.5，值越小线越细
            &:before{
                position: absolute;
                /*width: 1px;*/
                color: #d9d9d9;
                left: 0;
                content: ' ';
                top: 0;
                bottom: 0;
                border-left: 1px solid #d9d9d9;
                /*transform-origin: 100% 0;*/
                transform: scaleX(.5);
            }
            // 右边的边框
            &:after{
                position: absolute;
                width: 1px;
                color: #d9d9d9;
                content: ' ';
                top: 0;
                bottom: 0;
                right: 0;
                border-left: 1px solid #d9d9d9;
                transform-origin: 100% 0;
                transform: scaleX(.5);
            }

// 上面的边框
            &:before{
                position: absolute;
                height: 1px;
                color: #d9d9d9;
                left: 0;
                right: 0;
                content: ' ';
                top: 0;
                border-top: 1px solid #d9d9d9;
                transform-origin: 0 0;
                transform: scaleY(.5);
            }
            // 下面的边框
            &:after{
                position: absolute;
                height: 1px;
                color: #d9d9d9;
                left: 0;
                right: 0;
                content: ' ';
                bottom: 0;
                border-bottom: 1px solid #d9d9d9;
                transform-origin: 0 100%;
                transform: scaleY(.5);
            }

    <div class="text">
            我是cssTest页面---加粗，斜体，25px--scoped
            <span>span--111</span><br>
            <span>span---222</span><br>
        </div>
        <a>相邻aaa---111</ a><br>
        <a>相邻aaa---222</ a><br>
        <a>相邻aaa---333</ a><br>
        <p>相邻元素--pppp--11111</p >
        <p>相邻元素--pppp--22222</p >
        <p>相邻元素--pppp--3333

.text{
            + a{ color: blue} // 相邻的一个兄弟p元素
            ~ p{color: blue} // 后面的所有p元素
            > span{ color: red } // 所有子元素
        }

calc 使用：
在less中 calc(100% -4rem) 等带单位混合运算会被less解析忽略单位，全部按照百分比计算，此例中的计算被less编译成calc(96%)

解决方案：
width:calc(~"100% - 4rem");

scss中使用：width:calc(100% - 4rem)
