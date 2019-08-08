/*
|--------------------------------------------------------------------------
| Mutation Types
|--------------------------------------------------------------------------
*/
export const SET_CURRENT_ROUTINE = 'SET_CURRENT_ROUTINE';
export const UNSET_CURRENT_ROUTINE = 'UNSET_CURRENT_ROUTINE';

/*
|--------------------------------------------------------------------------
| Initial State
|--------------------------------------------------------------------------
*/
const initialState = {
	id: null,
	name: null,
	video:null,
};

/*
|--------------------------------------------------------------------------
| Mutations
|--------------------------------------------------------------------------
*/
const mutations = {
	[SET_CURRENT_ROUTINE](state, payload) {
		state.id = payload.routine.id;
		state.name = payload.routine.name;
		state.video = payload.routine.video
	},
	[UNSET_CURRENT_ROUTINE](state, payload) {
		state.id = null;
		state.name = null;
		state.video = null;
	}
};

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
	setCurrentRoutine: (context, routine) => {
		context.commit(SET_CURRENT_ROUTINE, {routine})
	},
	unsetCurrentRoutine: (context) => {
		context.commit(UNSET_CURRENT_ROUTINE);
	}
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
	
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