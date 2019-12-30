<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control ref="TabControl1" class="tab-control" :titles="['流行','新款','精选']" @TabClick="tabclick" v-show="isTabfixed"></tab-control>
    <Scroll class="content"
            ref="scroll" 
            :probe-type="3"
            @scroll="showBack"
            :pull-up-load="true"
            @pullingUp="LoadMore">
      <home-swiper :banners="banners" @imgLoad="finishLoad"></home-swiper>
      <home-recom :recommends="recommends"></home-recom>
      <fashion-view/>
      <tab-control class="tab-control" 
                  :titles="['流行','新款','精选']" 
                  @TabClick="tabclick"
                  ref="TabControl2"></tab-control>
      <goods-list :Goods="showGoods"></goods-list>
    </Scroll>
    <scroll-top @click.native="backTop" v-show="isShow"></scroll-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/GoodsList/GoodList'
import Scroll from 'components/common/scroll/Scroll'
import ScrollTop from 'components/content/scrollTop/ScrollTop'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecom from './childComps/HomeRecom'
import FashionView from './childComps/FashionView'

import {getHomeData,getViewData} from 'network/home.js'
export default {
  name:'Home',
  data(){
    return {
      banners:[],
      recommends:[],
      currentSel:'pop',
      goods:{
        'pop':{page:1,list:[]},
        'new':{page:1,list:[]},
        'sell':{page:1,list:[]}
      },
      isShow:false,
      isTabfixed:false,
      tabOffset:0,
      offsetY:0
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecom,
    FashionView,
    TabControl,
    GoodsList,
    Scroll,
    ScrollTop,
  },
  created() {
    this.getHomeData1();
    this.getViewData1('pop');
    this.getViewData1('new');
    this.getViewData1('sell');

  },
  // mounted() {
  //   const refresh = this.debounce(this.$refs.scroll.refresh,50);

  // },
  activated() {
    this.$refs.scroll.scrollTo(0,this.offsetY);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.offsetY = this.$refs.scroll.getScrollY()
  },
  computed: {
    showGoods(){
      return this.goods[this.currentSel].list
    }
  },
  methods:{
    /**
     * 防抖动方法 或者可以定义节流方法
     */
    // debounce(func,delay){
    //   let timer = null;
    //   return function(...args){
    //     if(timer) clearTimeout()
    //       setTimeout(() => {
    //       func.apply(this,args);
    //   }, delay);
    //   }
    // },

    
    /**
     * 网络请求封装
     */
    getHomeData1(){
      getHomeData().then(res=>{
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    })
    },
    getViewData1(type){
      const page = this.goods[type].page;
      getViewData(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page+=1;
        this.$refs.scroll.finished(); //结束回调，才可以进行下一次回调
      })
    
    },
    /**
     * 事件监听方法
     * 导航选项切换
     * 
     */
    tabclick(index){
      switch (index) {
        case 0:
          this.currentSel = 'pop'
          break;
        case 1:
          this.currentSel = 'new';
          break;
        case 2:
          this.currentSel = 'sell';
          break;
        default:
          break;
      }
      this.$refs.TabControl1.currentIndex=index;
      this.$refs.TabControl2.currentIndex=index;
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0)
    },
    showBack(position){
      this.isShow = (-position.y) >1000
      this.isTabfixed = (-position.y) >this.tabOffset;
    },
    LoadMore(){
      this.getViewData1(this.currentSel);
      this.$refs.scroll.scroll.refresh();//刷新加载进图片后 scroll给的固定宽度
    },
    finishLoad(){
     this.tabOffset = this.$refs.TabControl2.$el.offsetTop;
    // console.log(this.$refs.TabControl.$el.offsetTop);
    }
  },
}
</script>
<style scoped>
  .tab-control{
    position: sticky;
    top:44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
    left:0;
    right:0;
  }
</style>