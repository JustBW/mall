<template>
  <div>
    <Tabbar>
      <tabbar-item path='/home'>
        <img src="~assets/img/tabbar-img/home.svg" alt="" slot="tab-icon">
        <img src="~assets/img/tabbar-img/home_active.svg" alt="" slot="tab-icon-active">
        <div slot="tab-text">主页</div>
      </tabbar-item>
      <tabbar-item path='/category'>
        <img src="~assets/img/tabbar-img/category.svg" alt="" slot="tab-icon">
        <img src="~assets/img/tabbar-img/category_active.svg" alt="" slot="tab-icon-active">
        <div slot="tab-text">分类</div>
      </tabbar-item>
      <tabbar-item path='/shopcart'>
        <img src="~assets/img/tabbar-img/shopcart.svg" alt="" slot="tab-icon">
        <img src="~assets/img/tabbar-img/shopcart_active.svg" alt="" slot="tab-icon-active">
        <div slot="tab-text">购物车</div>
      </tabbar-item>
      <tabbar-item path='/profile'>
        <img src="~assets/img/tabbar-img/profile.svg" alt="" slot="tab-icon">
        <img src="~assets/img/tabbar-img/profile_active.svg" alt="" slot="tab-icon-active">
        <div slot="tab-text">我的</div>
      </tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
import TabbarItem from 'components/common/tabbar/TabbarItem'
export default {
  name:'MainTabbar',
  components:{
    Tabbar,
    TabbarItem
  }
}

</script>
<style>
</style>