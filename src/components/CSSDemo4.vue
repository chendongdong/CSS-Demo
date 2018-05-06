<template>
  <div class="demo4">
    <h2>I am CSSDemo4：盒子模型</h2>
    <div class="standard-box">
      我是标准盒子模型
    </div>
    <div class="ie-box">我是IE/怪异盒子模型</div>
  </div>
</template>
<style lang="less">
  .demo4{
   .standard-box{
     box-sizing: content-box;
     background: red;
     color: white;
     width: 200px;
     height: 100px;
     padding: 10px;
     margin: 20px;
     border: 10px solid blue;
   }
    .ie-box{
      box-sizing: border-box;
      padding: 10px;
      border: 10px solid blue;
      width: 200px;
      height: 100px;
      color: white;
      margin-top: 20px;
      background: green;
    }
  }
</style>
