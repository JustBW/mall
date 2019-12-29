<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Main-tabbar></Main-tabbar>
  </div>
</template>
<script>
import MainTabbar from 'components/content/MainTabbar/MainTabbar'
export default {
  name:'App',
  components:{
    MainTabbar
  }
}
</script>
<style>
@import 'assets/css/base.css';
</style>
