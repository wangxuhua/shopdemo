<template>
  <div id="box">
     <!--轮播图区域-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in this.lunbotu" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!--分类区域-->
    <ul>
      <li>
        <router-link to="/shouye/newslist">
          <img src="../../images/menu1.png" alt="">
          <p>新闻资讯</p>
        </router-link>
      </li>
      <li>
        <img src="../../images/menu2.png" alt="">
        <p>图片分享</p>
      </li>
      <li>
      <img src="../../images/menu3.png" alt="">
      <p>商品购买</p>
    </li>
      <li>
        <img src="../../images/menu4.png" alt="">
        <p>留言反馈</p>
      </li>
      <li>
        <img src="../../images/menu5.png" alt="">
        <p>视频专区</p>
      </li>
      <li>
        <img src="../../images/menu6.png" alt="">
        <p>练习我们</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        lunbotu:[]
      }
    },
    created(){
      this.getlunbotu();
    },
    methods:{
      //  获取轮播图数据
      getlunbotu(){
        this.$http.get("http://vue.studyit.io/api/getlunbo").then(function(res){
          if(res.body.status===0){
            this.lunbotu = res.body.message;
          }
        })
      },
      //  获取分类数据
    }
  }
</script>
<style scoped>
  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  #box{
    width: 100%;
  }
  .mint-swipe{
    height: 220px;
    background-color: red;
    width: 100%;
  }
  .mint-swipe img{
    width: 100%;
    height: 100%;
  }
  ul{
    width: 100%;
  }
  li {
    float: left;
    width: 33.333%;
    text-align: center;
    box-sizing: border-box;
    margin-top: 20px;
    border-collapse: collapse;
  }
  li img{
    width: 30px;
    height: 30px;
  }
</style>
