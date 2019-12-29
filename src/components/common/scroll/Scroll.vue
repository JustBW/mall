<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Scroll from 'better-scroll'
export default {
  name:"Scroll",
  props:{
    probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
  },
  data() {
    return {
      scroll:null
    }
  },
  //已安装
  mounted() {
    this.scroll = new Scroll(this.$refs.wrapper,{
      click:true,//点击事件是否生效
      probeType:this.probeType, //是否进行实时监听滚动 0/1 不监听 2手指滚动不监听惯性  3 手指滚动监听惯性
      pullUpLoad:this.pullUpLoad, //是否进行下拉加载
    });
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position);
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp');
    })
    // this.scroll.scrollTo(0,0) // x y time
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time);
    },
    finished(){
      this.scroll.finishPullUp();
    }
  }
}
</script>
<style>
</style>