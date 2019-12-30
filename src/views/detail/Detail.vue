<template>
  <div class="detail">
    <detail-tab class="detail-tab"></detail-tab>
    <scroll class="heightDetail" ref="scroll">
      <detail-swiper :topimg="topimg"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shops"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params-info :param-info="paramsInfo"></detail-params-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <goods-list :Goods="recommends"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailTab from './childComps/DetailTab'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/GoodsList/GoodList'

import {getDetail,Goods,Shop,GoodsParams,getRecommend} from 'network/detail'
export default {
  name:'Detail',
  data(){
    return{
      iid:null,
      topimg:[],
      goods:{},//商品基本信息==折扣等
      shops:{},
      detailInfo:{},
      commentInfo:{},
      paramsInfo:{},
      recommends:[]
    }
  },
  created(){
    this.iid=this.$route.params.iid;
    getDetail(this.iid).then(res=>{
      const data = res.data.result
      this.topimg=res.data.result.itemInfo.topImages;
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shops = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramsInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)
      if(data.rate.cRate!=0){
        this.commentInfo = data.rate.list[0]
      }
   }),
    getRecommend().then(res=>{
      this.recommends = res.data.data.list;
    })
  },
  components:{
    DetailTab,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailCommentInfo,
    DetailParamsInfo,
    GoodsList
},
methods:{
  imageLoad(){
    this.$refs.scroll.refresh()
  }
}
}

</script>
<style scoped>
.detail{
  position: relative;
  z-index:9;
  background-color: #fff;
  height: 100vh;
}
.heightDetail{
  /* position: absolute;
  top:44px;
  left:0;
  right:0;
  bottom: 0;  */

  height:calc(100% - 44px); 
  /* 100%相对父元素 应在父元素里设置100vh 视窗 */
}
.detail-tab{
  position: relative;
  z-index:9;
  background-color: #fff;
}
</style>