<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
    :key="index" 
    class="item-tab" 
    :class="{active: index==currentIndex}"
    @click="tabItem(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabControl',
    props:{
      titles:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      tabItem(index){
        this.currentIndex = index;
      }
    }
  }
</script>
<style>
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  line-height:40px;
  background-color: #fff;
}

.item-tab{
  flex:1;
}
.active{
  color:var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>