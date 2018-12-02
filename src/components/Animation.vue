<template>
  <div id="test1">
    <router-link to="/test2" tag="p">下一页</router-link>
    <div class="tip-container">
      <div class="tip-item move" v-for="(item, index) in tipData" v-show="index==showIdx">
        < img src="../assets/logo.png" class="tip-icon">
                <span class="tip-text">{{item}}</span>
      </div>
    </div>
    <div class="tip-container">
      <div class="textAnimation" :style="{height: 50*tipData.length + 'px'}">
        <div v-for="item in tipData" style="height: 50px;line-height: 50px">{{item}}</div>
      </div>
    </div>
    <div class="keyAnimation"></div>
    <div id="myDiv" style="background-color: lightblue;width: 0;height: 20px;line-height: 20px;">0%</div>
    <button id="btn">点击--run</button>
    <div style="width: 200px;height: 200px;text-align: center;background: red" id="change-color">哈哈哈</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        colors: ['red', 'blue', 'yellow', 'green'],
        idx: 0,
        showIdx: 0,
        tipData: ['今天有雨，注意带伞', '明天天气很晴朗', '后天偶遇奇事，自会化解', '天降降大任于斯人也', '必将苦其心志，饿其体肤', '空乏其身，行其乱其所为']
      }
    },
    mounted() {
      this.$nextTick(function () {
        setInterval(() => {
          if (this.showIdx < this.tipData.length - 1) {
            this.showIdx++
          } else {
            this.showIdx = 0
          }
        }, 4000)
        let _this = this
        document.getElementById('btn').addEventListener('click', function () {
          console.log('click----')
          let myDiv = document.getElementById('myDiv')
          myDiv.style.width = '0';
          cancelAnimationFrame(_this.timer);
          _this.timer = requestAnimationFrame(function fn() {
            if (parseInt(myDiv.style.width) < 500) {
              myDiv.style.width = parseInt(myDiv.style.width) + 5 + 'px';
              myDiv.innerHTML = parseInt(myDiv.style.width) / 5 + '%';
              _this.timer = requestAnimationFrame(fn);
            } else {
              cancelAnimationFrame(_this.timer);
            }
          });
        }, false)
        let ele = document.getElementById('change-color')
        let r = requestAnimationFrame(function fn() {
          if (_this.idx < _this.colors.length - 1) {
            _this.idx++
            console.log('idx=', _this.idx)
            ele.style.backgroundColor = _this.colors[_this.idx]
            r = requestAnimationFrame(fn)
          }
        });
      })
    },
    created() {
      let obj = {
        name: 'chendongdong',
        age: 18,
        gender: 'female',
        addr: 'shengzhen',
        favorit: 'dance'
      }
      console.log('home created ----')
      let arr = [10, 20, 30, 40]
      for (let a in arr) {
        console.log('arr a=', a) // 1,2,3,4
      }
      for (let a of arr) {
        // 遍历的是value值
        console.log('arr a=', a) // 10, 20, 30, 40
      }
      for (let k in obj) {
        // 遍历的key值
        // obj in k=name=chendongdong
        // obj in k=age=18
        // ...
        console.log('obj in k=' + k + '=' + obj[k])
      }
      for (let k of Object.keys(obj)) {
        // obj k:name=chendongdong
        // obj k:age=18
        // ...
        console.log('obj k:' + k + '=' + obj[k])
      }
    }
  }
</script>
<style>
  p {
    text-align: center;
    color: #fff;
  }

  #test1 {
    /*background: url("../assets/20120606175552_YGMsQ.thumb.700_0.jpeg");*/
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
  }

  .textAnimation {
    margin-left: 20px;
    position: relative;
    width: 100%;
    height: 40px;
    animation: key3 20s linear infinite;
  }

  @keyframes key3 {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }

  .keyAnimation {
    width: 100px;
    height: 100px;
    position: relative;
    animation: key2 5s linear 2s infinite alternate;
    /*-webkit-animation-name: key2;*/
    /*-moz-animation-name: key2;*/
    /*-o-animation-name: key2;*/
    /*animation-name: key2;*/
    /*animation-delay: 2s;*/
    /*animation-duration: 5s;*/
    /*animation-timing-function: linear; // 动画以低速开始，然后加快，在结束前变慢。ease-in 动画以低速开始, ease-out 动画以低速结束, ease-in-out 动画以低速开始和结束,*/
    /*animation-iteration-count: infinite; // 循环播放动画*/
    /*animation-fill-mode: forwards; // 保存最后一个动画的状态*/
    /*animation-direction: alternate; // 轮流反向播放动画*/
  }

  @keyframes key1 {
    from {
      background: red;
    }
    to {
      background: yellow;
    }
  }

  @keyframes key2 {
    0% {
      background: red;
      /*left: 0px;*/
      /*top: 0px;*/
      transform: translate(0, 0);
      opacity: .5;
    }
    25% {
      background: yellow;
      /*left: 200px;*/
      /*top: 0px;*/
      transform: translate(200%, 0);
    }
    50% {
      background: blue;
      /*left: 200px;*/
      /*top: 200px;*/
      transform: translate(200%, 200%);
      opacity: 1;
    }
    75% {
      background: green;
      /*left: 0px;*/
      /*top: 200px;*/
      transform: translate(0, 200%);
    }
    100% {
      background: red;
      /*left: 0px;*/
      /*top: 0px;*/
      transform: translate(0, 0);
      opacity: .5;
    }
  }

  @keyframes move {
    0% {
      transform: translateY(90%);
      opacity: 0;
    }
    50% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-90%);
    }
  }

  .move {
    animation: move 5s ease-out infinite;
  }

  .tip-container {
    margin-top: 30px;
    position: relative;
    width: 100%;
    height: 40px;
    background: #50AEFC;
    overflow: hidden;
  }

  .tip-item {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .tip-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
  }

  .tip-text {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 50px;
    font-size: 15px;
    color: #fff;
  }
</style>
