<template>
  <div>
    <ul>
      <li>无序列表1</li>
      <li>无序列表2</li>
      <li>无序列表3</li>
      <li>无序列表4</li>
    </ul>
    <ol>
      <li>无序列表1</li>
      <li>无序列表2</li>
      <li>无序列表3</li>
      <li>无序列表4</li>
    </ol>
    <dl>
      <dt>Coffee</dt>
      <dd>Black hot drink</dd>
      <dt>Milk</dt>
      <dd>White cold drink</dd>
    </dl>
    <dl>
      <dt>一级</dt>
      <dd>二级</dd>
      <dd>二级</dd>
      <dt>一级</dt>
      <dd>二级</dd>
      <dd>二级</dd>
    </dl>
    <div style="column-count: 3;column-width: 300px;background: red">测试</div>
  </div>
</template>
<script>
export default {
  methods: {
    fun(){
      console.log(arguments[0])
      console.log(typeof arguments)
      console.log(arguments instanceof Object)
      console.log(arguments instanceof Array)
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.fun('haha', 12)
    })
  }
}
</script>
