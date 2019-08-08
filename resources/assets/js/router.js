import Vue from 'vue';
import VueRouter from 'vue-router';
import jwtToken from './helpers/jwt-token';

Vue.use(VueRouter);

import store from './store/index';
import routes from './routes';

import {api} from "./config";

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
});
router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})

router.beforeEach(async (to, from, next) => {
	// just logged in: localStorage has token, but state does not have auth user
	if (jwtToken.getToken() && !store.getters.isLoggedIn) {
		let {data: authUser} = await axios.get(api.currentUser);
		await store.dispatch('setAuthUser', authUser);

	}
	if (to.meta.requiresAuthInit) {
		if (store.getters.isLoggedIn || jwtToken.getToken())
			return next();
		else
			return next({name: 'welcome'});
	}
	if (to.meta.requiresAuth) {
		if (store.getters.isLoggedIn || jwtToken.getToken())
			return next();
		else
			return next({name: 'login'});
	}
	if (to.meta.requiresGuest) {
		if (store.getters.isLoggedIn || jwtToken.getToken())
			return next({name: 'index'});
		else
			return next();
	}
	next();
});

export default router;
