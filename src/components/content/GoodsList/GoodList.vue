<template>
  <div class="GoodsList">
    <goods-item v-for="(item,index) in Goods" :key="index" :goods-item="item"></goods-item>
  </div>
</template>
<script>
import GoodsItem from './GoodsItem'
export default {
  name:'GoodsList',
  components:{
    GoodsItem
  },
  props:{
    Goods:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}

</script>
<style>
.GoodsList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}
</style>