import './bootstrap';
import router from './config/routes.js';
import PageHeader from './tpl/Header.vue';

new Vue({
  el: '#app',
  router,
  // render: h => h(App),
  components:{
   PageHeader
 }
})
