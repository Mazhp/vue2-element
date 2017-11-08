import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { install } from './service';


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(install);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})