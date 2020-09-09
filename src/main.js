import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant
import './plugins/vant'
// 导入 lib-flexible
import 'amfe-flexible'
// 导入全局样式表
import './style/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
