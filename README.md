# CSS盒子坍塌

> 盒子坍塌是什么？
本应该在父盒子内部的元素跑到了外部

> 为什么会出现盒子坍塌？
当父元素没设置足够大小的时候，而子元素设置了浮动的属性，子元素就会跳出父元素的边界（脱离文档流），尤其是当父元素的高度为auto时，而父元素中又没有其他非浮动的可见元素时，父盒子的高度就会直接坍塌为零，我们称这是CSS高度坍塌
举个栗子：
<div class="empty-div">
  <span class="float-content">测试内容</span>
</div>

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
