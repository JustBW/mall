import {
  Add_To_Cart,
  Add_Counter
} from './mutation-types'
export default {
    [Add_To_Cart](state, payload) {
      state.cartGoods.push(payload);
    },
    [Add_Counter](state, payload) {
      payload.count += 1;
    } 
}