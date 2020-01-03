<template>
  <div class="detail">
    <detail-tab class="detail-tab" @titleClick="changeCur" ref="detailtab"></detail-tab>
    <scroll class="heightDetail" ref="scroll" @scroll="getPosition" :probe-type="3">
      <detail-swiper :topimg="topimg"></detail-swiper>
      <detail-base-info :goods="goods" ref="TabControl2"></detail-base-info>
      <detail-shop-info :shop="shops"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params-info ref="params" :param-info="paramsInfo"></detail-params-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :Goods="recommends"></goods-list>
    </scroll>
    <scroll-top @click.native="backTop" v-show="isShow"></scroll-top>
    <detail-bottom-tab @addToCart="addToCart"></detail-bottom-tab>
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
import DetailBottomTab from './childComps/DetailBottomTab'
import ScrollTop from 'components/content/scrollTop/ScrollTop'


import {itemImageListener} from 'common/mixin'
import {debounce} from 'common/utils'
import {mapActions} from 'vuex'

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
      recommends:[],
      themesParams:[],
      getTopY:null, //保存锚点防抖函数 避免多次请求刷新,
      currentIndex:0
    }
  },
  mixins:[itemImageListener],
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
      

      // this.$nextTick(()=>{
      //回调函数 等渲染完后进行回调
      // 图片未加载完 仍然不能获取正确offsetTop 
      // })
   }),
    getRecommend().then(res=>{
      this.recommends = res.data.data.list;
    })
    // 对查询组件offsetTop进行防抖处理 赋值给一数值 随后刷新scroll后使用
    this.getTopY=debounce(()=>{
      this.themesParams=[]
      this.themesParams.push(0);
      this.themesParams.push(this.$refs.params.$el.offsetTop);
      this.themesParams.push(this.$refs.comment.$el.offsetTop)
      this.themesParams.push(this.$refs.recommend.$el.offsetTop)
      this.themesParams.push(Number.MAX_VALUE);
    },100)
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
    GoodsList,
    DetailBottomTab,
    ScrollTop
},
methods:{
  ...mapActions(['addCart']),
  imageLoad(){
    this.$refs.scroll.refresh();
    this.getTopY()
  },
  changeCur(index){
   this.currentIndex = index;
   this.$refs.scroll.scrollTo(0,-this.themesParams[index])
  },
  getPosition(position){
    const y = -position.y;
     this.isShow = (-position.y) > 1000
    for (let i=0;i<this.themesParams.length-1;i++) {
      if(this.currentIndex!=i&&y>=this.themesParams[i]&&y<this.themesParams[i+1]){
        this.currentIndex = i;
        // console.log(i-1);
        this.$refs.detailtab.currentIndex=this.currentIndex;
      }
    }
  },
  addToCart(){
    const product = {};
    product.img=this.topimg[0]
    product.desc = this.goods.desc;
    product.title = this.goods.title;
    product.price = this.goods.realPrice;
    product.iid = this.iid;
    this.addCart(product).then(res=>{
     this.$toast.show(res,2000)
    })
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

  height:calc(100% - 44px - 58px); 
  /* 100%相对父元素 应在父元素里设置100vh 视窗 */
}
.detail-tab{
  position: relative;
  z-index:9;
  background-color: #fff;
}
</style>