import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由配置
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App />'
});