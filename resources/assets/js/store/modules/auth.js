/*
|--------------------------------------------------------------------------
| Mutation Types
|--------------------------------------------------------------------------
*/
export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

/*
|--------------------------------------------------------------------------
| Initial State
|--------------------------------------------------------------------------
*/
const initialState = {
	id: null,
	email: null,
	level: 0,
	past_months: 0,
	diet_type: null,
	profile:null,
	subscription:null,
};

/*
|--------------------------------------------------------------------------
| Mutations
|--------------------------------------------------------------------------
*/
const mutations = {
	[SET_USER](state, payload) {
		state.id = payload.user.id
		state.email = payload.user.email
		state.level = payload.user.level
		state.past_months = payload.user.past_months
		state.diet_type = payload.user.diet_type
		state.profile = payload.user.profile
		state.status = payload.user.status
		state.subscription = payload.user.subscription
	},
	[UNSET_USER](state, payload) {
		state.id = null
		state.email = null
		state.level = 0
		state.past_months = 0
		state.diet_type = null
		state.profile = null
		state.status = null
		state.subscription = null

	}
};

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
	setAuthUser: (context, user) => {
		context.commit(SET_USER, {user})
	},
	unsetAuthUser: (context) => {
		context.commit(UNSET_USER);
	}
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
	isLoggedIn: (state) => {
		return !!(state.id && state.email);
	}
};

/*
|--------------------------------------------------------------------------
| Export the module
|--------------------------------------------------------------------------
*/
export default {
	state: initialState,
	mutations,
	actions,
	getters
}