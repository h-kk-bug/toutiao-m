<template>
  <div id="app">
    <!-- 路由的出口 -->
    <router-view/>
    <div>
      <i class="iconfont icondianzan"></i>
    </div>
  </div>
</template>

<script>
export default {
  // 每个组件最好都起一个名字,
  name: 'App',
  data () {
    return {}
  }
}
</script>

<style lang="less">
</style>
