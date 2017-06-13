import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import router from './config/routes.js';
import Form from './core/Form';
import PageHeader from './tpl/Header.vue';

window.Vue = Vue;
window.axios = axios;
window.Form = Form;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  // render: h => h(App),
  components:{
	PageHeader  	
  }
})
