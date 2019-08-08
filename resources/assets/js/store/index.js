import Vue from 'vue';
import Vuex from 'vuex';
import auth from "./modules/auth";
import currentRoutine from "./modules/currentRoutine";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		auth,
		currentRoutine
	},
	strict: true
});