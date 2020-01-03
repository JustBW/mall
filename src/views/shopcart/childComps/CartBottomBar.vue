<template>
  <div class="Bottom-bar">
    <div class="checkAll">
      <comfirm-Btn :checked="selectAll" 
                  class="check-icon"
                  @click.native="getAll">
      </comfirm-Btn>
      <span>全选</span>
    </div>
    <div class="Price">
      总价：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcCart">
      去结算({{totalLength}})
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ComfirmBtn from './ConfirmBtn'
export default {
  name:'CartBottomBar',
  components:{
    ComfirmBtn
  },
  computed:{
    ...mapGetters(['goodLength','cartLenth']),
    totalPrice(){
      return 'RMB：'+this.$store.getters.goodLength.filter(item=>item.checked)
              .reduce((preValue,item)=>{
                return preValue+item.price * item.count
              },0).toFixed(2)
    },
    totalLength(){
      return this.goodLength.filter(item=>item.checked).length;
    },
    selectAll(){
      if(this.goodLength.length==0){
        return false;
      } 
      return !this.goodLength.find(item=>!item.checked)
    }
  },
  methods: {
    getAll(){
      if(this.selectAll){
        this.goodLength.forEach(item=>item.checked=false);
      }else{
        this.goodLength.filter(item=>{
        if(!item.checked){
         item.checked = true;
        }
      })
      }
// this.goodLength.forEach(item=>item.checked = !this.selectAll); 这里不能这样简写 
      
    },
    calcCart(){
    if(!this.selectAll){
      this.$toast.show('请选择至少一件商品')
    }
  }
  }
}

</script>
<style scoped>
.Bottom-bar{
  display: flex;
  position: fixed;
  height: 40px;
  left: 0;
  right: 0;
  background-color: #eee;
  font-size: 14px;
  bottom: 49px;
  /* line-height: 40px */
}
.checkAll{
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-left:10px
}
.check-icon{
  height: 23px;
  width: 23px;
}
.Price{
  flex:1;
  height: 40px;
  line-height: 40px;
  margin-left:5px
}
.calculate{
  height: 40px;
  width:100px;
  background: orange;
  color:#fff;
  line-height: 40px;
  text-align: center
}
</style>