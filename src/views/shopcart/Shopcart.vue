<template>
  <div id="shopcart">
    <nav-bar class="cartBg">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar';
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'
//辅助函数 将vuex中getter 函数拼入computed 计算属性中 当做计算属性使用  可是数组 可是对象
// ...mapGetters(
    //   ['cartLenth',
    //   'goodLength']
    //   )
export default {
  name:'Shopcart',
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length:'cartLenth',
      list:'goodLength'
    })
    // ...mapGetters(
    //   ['cartLenth',
    //   'goodLength']
    //   )
    // cartLenth(){
    //   return this.$store.state.cartGoods.length;
    // }
  },
}

</script>
<style scoped>
.cartBg{
  background-color: var(--color-tint);
  color:#fff;
  font-weight: bold;
}
</style>