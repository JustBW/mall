import {
  Add_To_Cart,
  Add_Counter
} from './mutation-types'
export default{
  addCart(context, payload) {
    return new Promise((resolve,reject)=>{
      let product = context.state.cartGoods.find(item => item.iid == payload.iid);
      if (product) {
        context.commit(Add_Counter, product)
        resolve('该商品数量+1')
      } else {
        payload.count = 1;
        payload.checked = true;
        context.commit(Add_To_Cart, payload)
        resolve('添加商品成功')
      }
    })
  }
}