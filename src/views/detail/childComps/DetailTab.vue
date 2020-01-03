<template>
  <div>
    <nav-bar>
      <img src="~assets/img/common/back.svg" alt="" slot="left" @click="backHome()" class="img">
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{isActive:currentIndex===index}" @click="cutTab(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
 name:'DetailTab',
 data(){
   return {
     titles:['商品','参数','评论','推荐'],
     currentIndex:0
   }
 },
 components:{
   NavBar
 },
 methods:{
   cutTab(index){
     this.currentIndex = index;
     this.$emit('titleClick',index);
   },
   backHome(){
     this.$router.back()
   }
 }

}

</script>
<style scoped>
.isActive{
  color:var(--color-high-text);
}
.title{
  display: flex;
  font-size:13px
}
.title-item{
  flex:1
}
.img{
  margin-top:12px;
  margin-left:15px
}
</style>