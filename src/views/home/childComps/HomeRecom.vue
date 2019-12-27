<template>
    <div>
      <div class="RecDetail">
        <div class="RecomItem" v-for="(item,index) in recommends" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'HomeRecom',
  props:{
    recommends:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}

</script>
<style>
.RecDetail{
  display: flex;
  width:100%;
  font-size: 14px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.RecomItem{
  flex:1;
}
.RecomItem img{
  width:60px;
  height: 60px;
  margin-bottom: 5px;
}
</style>