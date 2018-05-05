<template>
  <div class="demo3">
    <h2>I am CSSDemo3：居中方法</h2>
    <div class="wrap">
      <div class="center">水平居中</div>
      <div class="center1">水平居中1</div>
    </div>
    <div class="wrap1">
      <div class="center2">水平居中2</div>
    </div>
    <div class="wrap2">
      <div class="center3">
        上下垂直居中：定高方案一
      </div>
    </div>
    <div class="wrap3">
      <div class="center4">
        上下垂直居中：定高方案二
      </div>
    </div>
    <div class="wrap4">
      <div class="center5">
        上下垂直居中：定高方案三
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .demo3{
    text-align: left;
    .wrap4{
      margin-top: 20px;
      height: 100px;
      color: white;
      text-align: center;
      background: red;
      &:before{
        content: '';
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .center5{
        background: green;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .wrap3{
      margin-top: 20px;
      color: white;
      height: 100px;
      background: red;
      position: relative;
    }
    .center4{
      background: green;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .wrap2{
      margin-top: 20px;
      color: white;
      height: 100px;
      background: red;
    }
    .center3{
      line-height: 100px;
      background: green;
    }
    .wrap{
      height: 100px;
      background: red;
      color: white;
      text-align: center;
    }
    .center{
      background: blue;
      display: inline;
    }
    .center1{
      width: 200px;
      margin: 0 auto;
      background: green;
    }
    .wrap1{
      margin-top: 20px;
      height: 100px;
      background: red;
      color: white;
      position: relative;
      .center2{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        background: green;
      }
    }
  }
</style>
