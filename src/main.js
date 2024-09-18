import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

import VFormRender from 'vform-builds/dist/VFormRender.umd.min.js'  //引入VFormRender组件

import 'vform-builds/dist/VFormRender.css'  //引入VFormRender样式

Vue.use(VFormRender)  //全局注册VFormRender等组件

// import nanoui from '@aegle/nano-ui'
import {
  initInputDOM,
  nextFocus,
} from './views/common.js' //公共方法
Vue.prototype.initInputDOM = initInputDOM
Vue.prototype.nextFocus = nextFocus

// Vue.use(nanoui)
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
