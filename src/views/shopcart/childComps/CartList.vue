<template>
  <div class="cart">
     <scroll class="content">
      <shop-cart-item v-for="(item,index) in product" :key="index" :itemInfo="item"></shop-cart-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import {mapGetters} from 'vuex'
import ShopCartItem from './ShopCartItem'
export default {
 name:'CartList',
 components:{
   ShopCartItem,
   Scroll
 },
 computed: {
   ...mapGetters({
     product:'goodLength'
   })
 },

}
</script>
<style scoped>
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
.cart{
  height: 100vh;
}
</style>