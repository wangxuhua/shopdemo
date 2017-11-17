<template>
  <div id="box">
    <h3>{{newsxiangqing.title}}</h3>
    <p>
      <span>发表时间：{{newsxiangqing.add_time | dataFormat }}</span>
      <span>评论人数：{{newsxiangqing.click}}</span>
    </p>
    <hr>
    <div v-html="newsxiangqing.content">
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        id:this.$route.params.id,
        newsxiangqing:{}
      }
    },
    created(){
      this.getnewsxiangqing()
    },
    methods:{
       getnewsxiangqing(){
         this.$http.get("http://vue.studyit.io/api/getnew/"+this.id).then(res=>{
           if(res.body.status===0){
             this.newsxiangqing = res.body.message[0]
             console.log(this.newsxiangqing)
           }
         })
  }
    }
  }
</script>
<style scoped>
  #box{
    padding: 10px;
  }
  h3{
    color:red
  }
  p{
    display: flex;
    justify-content: space-between;
    color:blue
  }
</style>
