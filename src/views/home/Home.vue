<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import {getHomeData} from 'network/home.js'
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'Home',
  data(){
    return {
      banners:[]
    }
  },
  components:{
    NavBar
  },
  created() {
    getHomeData().then(res=>{
      console.log(res.data);
      this.banners = res.data.data.banner;
    })
  },
}
</script>
<style>
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
  }
</style>