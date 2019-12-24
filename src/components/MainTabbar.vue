<template>
  <div>
    <Tabbar>
      <tabbar-item>
        <img src="~assets/img/tabbar-img/home.svg" alt="" slot="tab-icon">
        <img src="~assets/img/tabbar-img/home_active.svg" alt="" slot="tab-icon-active">
        <div slot="item-text">主页</div>
      </tabbar-item>
      <tabbar-item>
        <img src="~assets/img/tabbar-img/category.svg" alt="" slot="tab-icon">
        <img src="~assets/img/tabbar-img/category_active.svg" alt="" slot="tab-icon-active">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item>
        <img src="~assets/img/tabbar-img/shopcart.svg" alt="" slot="tab-icon">
        <img src="~assets/img/tabbar-img/shopcart_active.svg" alt="" slot="tab-icon-active">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item>
        <img src="~assets/img/tabbar-img/profile.svg" alt="" slot="tab-icon">
        <img src="~assets/img/tabbar-img/profile_active.svg" alt="" slot="tab-icon-active">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/Tabbar'
import TabbarItem from 'components/common/TabbarItem'
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