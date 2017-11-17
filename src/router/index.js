import Vue from 'vue'
import Router from 'vue-router'
import shouye from "./indexroute/shouye.vue"
import huiyuan from "./indexroute/huiyuan.vue"
import shopcar from "./indexroute/shopcar.vue"
import search from "./indexroute/search.vue"
import newslist from "./newsrouter/newslist.vue"
import newsxiangqing from "./newsrouter/newsxiangqing.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:shouye},
    {path:"/shouye",component:shouye},
    {path:"/huiyuan",component:huiyuan},
    {path:"/shopcar",component:shopcar},
    {path:"/search",component:search},
    {path:"/shouye/newslist",component:newslist},
    {path:"/shouye/newsxiangqing/:id",component:newsxiangqing}
  ],
  linkActiveClass:"mui-active"
})
