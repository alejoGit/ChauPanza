//import $ from 'jquery';
import Vue from 'vue';
import VueNoty from 'vuejs-noty';
import axios from 'axios';

import router from './router';
import store from './store/index';
import App from './components/App.vue';
import jwtToken from './helpers/jwt-token';

import VeeValidate from 'vee-validate';
import messagesEs from 'vee-validate/dist/locale/es.js'

    
//window.$ = window.jQuery = require('jquery');
window.axios = axios;
//require('bootstrap');

//require('materialize-css');



Vue.use(VueNoty, {
	progressBar: false,
	layout: 'bottomRight',
	theme: 'relax',
	timeout: 3000
});



Vue.use(VeeValidate, {
  locale: 'es',
  dictionary: {
    es: messagesEs
  }
});

axios.interceptors.request.use(config => {
	config.headers['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
	config.headers['X-Requested-With'] = 'XMLHttpRequest';

	if (jwtToken.getToken()) {
		config.headers['Authorization'] = 'Bearer ' + jwtToken.getToken();
	}

	return config;
}, error => {
	return Promise.reject(error);
});

axios.interceptors.response.use(response => {
	return response;
}, error => {
	let errorResponseData = error.response.data;

	const errors = ["token_invalid", "token_expired", "token_not_provided"];

	if (errorResponseData.error && errors.includes(errorResponseData.error)) {
		
		store.dispatch('unsetAuthUser')
		.then(() => {
			jwtToken.removeToken();
			router.push({name: 'login'});
		});
		
		
	}

	return Promise.reject(error);
});

Vue.component('app', App);

const app = new Vue({
	router,
	store
}).$mount('#app');
