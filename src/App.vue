<template>
  <div id="app">
    <!--头部-->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!--主体-->
    <router-view></router-view>
    <!--底部-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/shouye">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/huiyuan">
        <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon icon iconfont icon-gouwuche"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon icon iconfont icon-fangdajing"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  padding-top: 40px;
}

</style>
