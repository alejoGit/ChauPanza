import Home from './components/home/Home.vue'
import Login from './components/login/Login.vue'
import ProfileWrapper from './components/profile/ProfileWrapper.vue'
import Profile from './components/profile/Profile.vue'
import EditProfile from './components/profile/edit-profile/EditProfile.vue'
import EditPassword from './components/profile/edit-password/EditPassword.vue'
import FreeRegister from './components/register/FreeRegister.vue'
import Welcome from './components/welcome/Welcome.vue'
import Plans from './components/plans/Plans.vue'
import Routines from './components/routines/Routines.vue'
import Routine from './components/routines/Routine.vue'
import QualifyRoutine from './components/routines/QualifyRoutine.vue'
import Feeding from './components/feeding/Feeding.vue'
import FeedingGuide from './components/feeding/FeedingGuide.vue'
import FeedingWrapper from './components/feeding/FeedingWrapper.vue'
import FeedingSingle from './components/feeding/FeedingSingle.vue'
import FeedingIndications from './components/feeding/FeedingIndications.vue'
import FeedingForbidden from './components/feeding/FeedingForbidden.vue'
import FeedingPortions from './components/feeding/FeedingPortions.vue'
import ControlWrapper from './components/control/ControlWrapper.vue'
import Control from './components/control/Control.vue'
import ControlFeeding from './components/control/ControlFeeding.vue'
import ControlRoutines from './components/control/ControlRoutines.vue'
import ControlBoard from './components/control/ControlBoard.vue'
import ControlPhotos from './components/control/ControlPhotos.vue'
import ControlHemogram from './components/control/ControlHemogram.vue'
import UploadPhoto from './components/control/UploadPhoto.vue'
import Diagnostic from './components/diagnostic/Diagnostic.vue'
import Objectives from './components/objectives/Objectives.vue'
import InitialPhotos from './components/diagnostic/InitialPhotos.vue'


export default [
	{
		path: '/',
		name: 'index',
		component: Home,
		meta: {requiresAuthInit: true}
	},
	{
		path: '/bienvenido',
		name: 'welcome',
		component: Welcome,
		meta: {requiresGuest: true}
	},
	/* LOGIN y REGISTRO*/
	{
		path: '/app-login',
		name: 'login',
		component: Login,
		meta: {requiresGuest: true}
	},
	{
		path: '/registro-gratuito',
		name: 'freeRegister',
		component: FreeRegister,
		meta: {requiresGuest: true}
	},
	{
		path: '/planes',
		name: 'plans',
		component: Plans,
		meta: {requiresAuth: true}
	},
	/* RUTINAS*/
	{
		path: '/rutinas',
		name: 'routines',
		component: Routines,
		meta: {requiresAuth: true}
	},
	{
		path: '/rutina',
		name: 'routine',
		component: Routine,
		meta: {requiresAuth: true}
	},
	{
		path: '/calificar-rutina',
		name: 'qualifyRoutine',
		component: QualifyRoutine,
		meta: {requiresAuth: true}
	},

	{
		path: '/diagnostico-inicial',
		name: 'diagnostic',
		component: Diagnostic,
		meta: {requiresAuth: true}
	},
	{
		path: '/seleccionar-objetivos',
		name: 'objectives',
		component: Objectives,
		meta: {requiresAuth: true}
	},
	{
		path: '/ingresar-fotos',
		name: 'initialPhotos',
		component: InitialPhotos,
		meta: {requiresAuth: true}
	},
	/* ALIMENTACIÓN*/
	{
		path: '/alimentacion',
		//name: 'feeding',
		component: FeedingWrapper,
		//meta: {requiresAuth: true},
		children: [
			{
				path: '',
				name: 'feeding',
				component: Feeding,
				meta: {requiresAuth: true},
				header:{}
			},
			{
				path: 'guia-alimentacion',
				name: 'feedingGuide',
				component: FeedingGuide,
				meta: {requiresAuth: true}
			},
			{
				path: 'elegir',
				name: 'feedingSingle',
				component: FeedingSingle,
				meta: {requiresAuth: true}
			},
			{
				path: 'indicaciones',
				name: 'feedingIndications',
				component: FeedingIndications,
				meta: {requiresAuth: true}
			},
			{
				path: 'prohibidos',
				name: 'feedingForbidden',
				component: FeedingForbidden,
				meta: {requiresAuth: true}
			},
			{
				path: 'porciones',
				name: 'feedingPortions',
				component: FeedingPortions,
				meta: {requiresAuth: true}
			},
			{
				path: '*',
				redirect: {
					name: 'feeding'
				}
			}
		],
	},
	/* CONTROL*/
	{
		path: '/control',
		//name: 'feeding',
		component: ControlWrapper,
		//meta: {requiresAuth: true},
		children: [
			{
				path: '',
				name: 'control',
				component: Control,
				meta: {requiresAuth: true}
			},
			{
				path: 'comidas',
				name: 'controlFeeding',
				component: ControlFeeding,
				meta: {requiresAuth: true}
			},
			{
				path: 'rutinas',
				name: 'controlRoutines',
				component: ControlRoutines,
				meta: {requiresAuth: true}
			},
			{
				path: 'tablero-evolucion',
				name: 'controlBoard',
				component: ControlBoard,
				meta: {requiresAuth: true}
			},
			{
				path: 'fotos',
				name: 'controlPhotos',
				component: ControlPhotos,
				meta: {requiresAuth: true}
			},
			{
				path: 'hemograma',
				name: 'controlHemogram',
				component: ControlHemogram,
				meta: {requiresAuth: true}
			},
			{
				path: 'subir-foto',
				name: 'uploadPhoto',
				component: UploadPhoto,
				meta: {requiresAuth: true}
			},
			{
				path: '*',
				redirect: {
					name: 'control'
				}
			}
		],
	},
	{
		path: '/perfil',
		component: ProfileWrapper,
		children: [
			{
				path: '',
				name: 'profile',
				component: Profile,
				meta: {requiresAuth: true}
			},
			{
				path: 'editar',
				name: 'profile.editProfile',
				component: EditProfile,
				meta: {requiresAuth: true}
			},
			{
				path: 'editar-password',
				name: 'profile.editPassword',
				component: EditPassword,
				meta: {requiresAuth: true}
			},
			{
				path: '*',
				redirect: {
					name: 'profile'
				}
			}
		]
	},
];