<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="finishLoad">
          </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name:'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return [];
      }
    }
    
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods: {
    finishLoad(){
      this.$emit('imgLoad');
    }
  },
}

</script>
<style>
</style>