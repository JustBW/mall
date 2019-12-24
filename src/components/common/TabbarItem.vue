<template>
  <div class="tabbar-item">
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
  computed:{
    isActive(){
      return true
    }
  }
}

</script>
<style>
.tabbar-item{
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