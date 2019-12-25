<template>
  <div class="tabbar-item" @click="getPath()">
    <div v-if="!isActive">
      <slot name="tab-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-icon-active"></slot>
    </div>
    <div>
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabbarItem',
  props:{
    path:{
      type:String
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !=-1
    }
  },
  methods:{
    getPath(){
      this.$router.push(this.path)
    }
  }
}

</script>
<style>
.tabbar-item{
  margin-top:3px;
  height: 49px;
  text-align: center;
  font-size:14px;
  flex:1;
}
.tabbar-item img{
  vertical-align: middle;
  height: 24px;
  width:24px;
}
</style>