<template>
  <div class="demo2">
    <h2>I am CSSDemo2：两边宽度确定，中间宽度自适应</h2>
    <h4>1.流体布局：左右元素使用float，main设置左右margin</h4>
    <div class="container">
      <div class="left"></div>
      <div class="right"></div>
      <div class="main"></div>
    </div>
    <div class="div-text">
      <img src="../assets/logo.png" class="image">
      <span class="text">我是文字内容，拉开了斯柯达老师的离开房间凯撒大帝我是文字撒大帝我是文字撒
        大帝我是文字撒大帝我是文字内容，拉开了斯柯达老师的离开房间凯撒大帝我是文字内容，拉开了斯柯达老师的离开房间凯撒大帝</span>
    </div>
    <h4>2.圣杯布局：main使用float+width:100%，
    左使用position:relative+float+left:负值+margin-left:负值；
    右使用position:relative+float+right:负值+margin-left:负值</h4>
    <div class="container2">
      <div class="main2">main2</div>
      <div class="left2">left2</div>
      <!--right2 的顺序可以随便放，left2必须要在main2后面-->
      <div class="right2">right2</div>
    </div>
    <h4 style="margin-top: 20px">3.双飞翼布局：content3设置float:left+width:100%，main3:左右设置margin,
    left3设置float:left+margin-left:-100%,right3设置float:right+margin-left:负值
    </h4>
    <div style="color: red">注：margin-left:负值，相对自身位置向左，当这个值大于自身的width时就会自动换到上一行，
    margin-left:-100% 表示上一行的这个X坐标位置</div>
    <div class="content3">
      <div class="main3">main3</div>
    </div>
    <div class="left3">left3</div>
    <div class="right3">right3</div>
    <h4>左边定宽，右边自适应方案：float+margin，float+calc</h4>
    <!--方案一-->
    <div class="content4">
      <div class="left4">left4</div>
      <div class="right4">right4</div>
    </div>
    <!--方案二-->
    <div class="content5">
      <div class="left5">left5</div>
      <div class="right5">right5</div>
    </div>
    <h4>左右两边定宽，中间自适应：float，float + calc, 圣杯布局（设置BFC，margin负值法），flex</h4>
    <div class="wrap">
      <div class="left6">left6</div>
      <div class="right6">right6</div>
      <!--方案一-->
      <!--<div class="center6">center6</div>-->
      <!--方案二-->
      <div class="center7">center7</div>
    </div>
    <div class="wrap2">
      <div class="left8">left8</div>
      <div class="center8">center8</div>
      <div class="right8">right8</div>
    </div>
  </div>
</template>
<style lang="less">
  .demo2{
    .wrap2{
      margin-top: 20px;
      width: 100%;
      height: 100px;
      color: white;
      display: flex;
      .left8{
        width: 100px;
        background: green;
      }
      .right8{
        width: 100px;
        background: blue;
      }
      .center8{
        flex: 1;
        background: red;
      }
    }
    .wrap{
      width: 100%;
      height: 100px;
      color: white;
      & > div{
        height: 100%;
      }
      .left6{
        width: 100px;
        float: left;
        background: green;
      }
      .right6{
        width: 100px;
        float: right;
        background: blue;
      }
      .center6{
        margin: 0 120px;
        background: red;
      }
      .center7{
        margin-left: 100px;
        background: red;
        width: calc(100% - 200px);
      }
    }
    .content5{
      margin-top: 20px;
      color: white;
      line-height: 100px;
      width: 100%;
      .left5{
        background: red;
        width: 100px;
        height: 100px;
        float: left;
      }
      .right5{
        background: green;
        height: 100px;
        /*float: left;*/
        margin-left: 120px;
        width: calc(100% - 120px);
      }
    }
    .content4{
      margin-top: 20px;
      color: white;
      line-height: 100px;
      .left4{
        background: red;
        width: 100px;
        height: 100px;
        float: left;
      }
      .right4{
        background: green;
        height: 100px;
        margin-left: 120px;
      }
    }
    .content3{
      margin-bottom: 50px;
      width: 100%;
      float: left;
      .main3{
        margin-left: 120px;
        margin-right: 120px;
        height: 100px;
        background: green;
      }
    }
    .left3{
      float: left;
      width: 100px;
      height: 100px;
      background: red;
      margin-left: -100%;
    }
    .right3{
      float: right;
      color: white;
      width: 100px;
      height: 100px;
      margin-left: -120px;
      background: blue;
    }
    .container{
      font-size: 16px;
      color: white;
    }
    .left{
      background: red;
      width: 100px;
      height: 120px;
      float: left;
    }
    .right{
      width: 100px;
      background: blue;
      height: 120px;
      float: right;
    }
    .main{
      margin-left: 120px;
      margin-right: 120px;
      height: 120px;
      background: green;
    }
    .div-text{
      text-align: left;
      margin-top: 20px;
      min-height: 100px;
      .image{
        width: 100px;
        height: 100px;
        float: right;
      }
      .text{
        margin-right: 120px;
      }
    }
    .container2{
      margin-left: 120px; // 给左边的元素预留空间
      margin-right: 120px; // 给右边的元素预留空间
      .main2{
        float: left; // 浮起来
        width: 100%; // 适配屏幕宽度
        height: 120px;
        background: green;
      }
      .left2{
        float: left; // 浮起来
        position: relative; // 相对父元素container2
        left: -120px; // 距离父元素
        margin-left: -100%; // 父元素container2的margin-left
        width: 100px;
        height: 120px;
        background: red;
      }
      .right2{
        float: right;
        position: relative;
        margin-left: -100px;
        right: -120px;
        width: 100px;
        height: 120px;
        background: blue;
      }
    }
  }
</style>
