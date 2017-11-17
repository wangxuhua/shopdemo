<template>
  <div id="box">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/shouye/newsxiangqing/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <p id="title">{{item.title}}</p>
            <p class='mui-ellipsis' id="twop">
              <span>发表时间：{{item.add_time | dataFormat}} </span>
              <span>评论人数：{{item.click}}人</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
   export default {
     data(){
       return{
        //  新闻列表数据
        newslist:[]
       }
     },
     created(){
       this.getnewslist()
     },
     methods:{
       getnewslist(){
         this.$http.get("http://vue.studyit.io/api/getnewslist").then(res=>{
           if(res.body.status===0){
             this.newslist = res.body.message;
           }
         })
       }
     }
   }
</script>
<style scoped>
  #title{
    color:red;
  }
   #twop{
     display: flex;
     justify-content: space-between;
     font-size: 12px;
   }
</style>
