<template>
  <div class="check-btn" :class={active:checked}>
    <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
 name:'ConfirmBtn',
 props:{
   checked:{
     type:Boolean,
     default:false
   }
 }
}

</script>
<style scoped>
.check-btn{
  border:2px solid #aaa;
  border-radius: 50%
}
.active{
    background-color: red;
    border-color: red;
  }
</style>