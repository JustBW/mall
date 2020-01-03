import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast'

import FastClick from 'fastclick'
Vue.config.productionTip = false
Vue.use(Toast);
FastClick.attach(document.body)
Vue.prototype.$bus = new Vue() 
/**
 * 事件总线
 * n个后代组件（子孙组件）中的某个事件托管给事件总线 this.$bus.$emit('事件名称')
 * 方便某祖宗组件在事件总线中监听该事件 并执行对应函数 this.$bus.$on('事件名称',()=>{
 *    对应执行的函数体
 *  })
 * 
 * 可在VueX中设置状态管理
 *  */  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
