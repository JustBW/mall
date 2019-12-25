<template>
  <div>
    <div id="Tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'Tabbar'
}
</script>
<style>
#Tabbar{
  position: fixed;
  left:0;
  right:0;
  bottom:0;
  background-color: #f6f6f6;
  height: 49px;
  display: flex;
  box-shadow: 0px -2px 1px rgba(100,100,100,.2);
}
</style>