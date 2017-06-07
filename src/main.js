import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import router from './config/routes.js';
import PageHeader from './tpl/Header.vue';

window.Vue = Vue;
window.axios = axios;

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  // render: h => h(App),
  components:{
	PageHeader  	
  }
})
