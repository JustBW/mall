<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}

</script>
<style>
.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow: 0px 1px 1px rgba(100,100,100,.1);

}
.nav-bar .left{
  width: 60px;
}
.nav-bar .right{
  width: 60px;
}
.nav-bar .center{
  flex: 1;
  text-align: center
}
</style>