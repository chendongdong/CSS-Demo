<template>
  <div class="demo1">
    <h2>I am CSSDemo1</h2>
    <div class="des">CSS盒子坍塌</div>
    <div class="empty-div">
      <span class="float-content">测试内容</span>
    </div>
  </div>
</template>
<style lang="less">
  @font-color: white;
  .demo1{
    font-size: 16px;
    h2,h4{
      color: #333;
    }
    .des{
      font-size: 14px;
    }
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
    .float-content{
      float: right;
    }
  }
</style>
