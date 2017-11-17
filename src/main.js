// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from "vue-resource"
Vue.use(VueResource)
//引入mui的样式
import "./lib/css/mui.css"
//按需导入mint-ui包
import { Header ,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入事件过滤器
import moment from "moment"
Vue.filter("dataFormat",function(data,pattern="YYYY-MM-DD hh:mm:ss"){
  return moment(data).format(pattern)
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
