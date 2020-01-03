import Toast from './Toast'
const obj={}

obj.install = (Vue)=>{
//   Vue.extend(Toast) 
//  Vue.prototype.$toast = Toast
// 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
// 2.根据组件构造器 new出一个实例化组件对象
  const toast = new toastConstructor()
// 3.手动将组件对象挂载在某一元素上面
  toast.$mount(document.createElement('div'))
// 4. toast.$el对应就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj