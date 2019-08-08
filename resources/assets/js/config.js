// const apiDomain = Laravel.apiDomain;
const apiDomain = '/api';
export const siteName = Laravel.siteName;

export const api = {
	login: apiDomain + '/authenticate',
	currentUser: apiDomain + '/user',
	updateUserProfile: apiDomain + '/user/profile/update',
	updateUserPassword: apiDomain + '/user/password/update',

	freeRegister: apiDomain + '/user/free-register',
	test: apiDomain + '/test',
	getRoutines: apiDomain + '/get-routines',
	qualifyRoutine: apiDomain + '/qualify-routine',
	getUserScores: apiDomain + '/get-user-scores',
	getFoods: apiDomain + '/get-foods',
	getFoodsByDate: apiDomain + '/get-foods-by-date',
	getUserIndications: apiDomain + '/get-user-indications',
	setFoodUser: apiDomain + '/set-food-user',
	setFoodUserByDate: apiDomain + '/set-food-user-by-date',
	postUrlUserPlan: apiDomain + '/url-user-plan',
	setDiagnostic: apiDomain + '/set-diagnostic',
	setObjectives: apiDomain + '/set-objectives',
	getPhotos: apiDomain + '/get-photos',
	getControls: apiDomain + '/get-controls',
	setControls: apiDomain + '/set-controls',
	updateUserProfile:apiDomain + '/update-profile',
};